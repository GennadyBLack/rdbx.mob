import { makeAutoObservable, runInAction } from "mobx";
import {
  setToken,
  getToken,
  removeToken,
  removeFromStorage,
} from "../helpers/storage";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export default class Auth {
  user = null;
  logged = false;
  loading = false;
  error = null;
  location = null;
  device = null;
  register_token = null;
  auth_data = null;
  settings = null;

  fetchMe = async () => {
    try {
      let token = await getToken();
      if (this?.user?.id || !token || token == "null") {
        return;
      }
      this.loading = true;
      await this?.root?.api?.cabinet?.profile({}).then((res) => {
        runInAction(async () => {
          this.user = {
            ...res?.data?.data?.attributes,
            id: res?.data?.data?.id,
          };
          this.logged = true;
          this.loading = false;
        });
      });
      //get settings
      await this?.root?.api?.cabinet?.get_all_setting({}).then((res) => {
        runInAction(async () => {
          this.settings = {
            ...res?.data?.data,
          };
          this.logged = true;
          this.loading = false;
        });
      });
    } catch (error) {
      await removeToken();
      this.root.setError(error, "auth fetch me");
      this.loading = false;
    }
  };

  login = async (data, callback) => {
    try {
      this.loading = true;
      await this.root.api.auth.login(data).then(async (res) =>
        runInAction(async () => {
          const token = res?.data?.data?.attributes?.access_token;
          if (token) {
            if (Platform.OS === "web") {
              await setToken(token);
            } else {
              await SecureStore?.setItemAsync("token", token);
            }
            await this.fetchMe();
            callback();
          }
        })
      );
      this.loading = false;
    } catch (error) {
      this.root.setError(error);
      this.loading = false;
      removeToken();
    }
  };

  register = async (data) => {
    try {
      this.loading = true;
      let res = await this.root.api.auth.register(data);
      if (res?.data) {
        this.register_token = res?.data;
        if (Platform.OS === "web") {
          await setToken(res?.data?.data?.attributes?.access_token);
        } else {
          await SecureStore?.setItemAsync(
            "token",
            res?.data?.data?.attributes?.access_token
          );
        }
      }

      this.loading = false;
    } catch (error) {
      this.root.setError(error);
      this.loading = false;
    }
  };

  registerSetPassword = async (data) => {
    try {
      this.loading = true;
      let res = await this.root.api.auth.activate_one_user_by_token(data);
      if (res?.data) {
        this.auth_data = res?.data;
      }

      this.loading = false;
    } catch (error) {
      this.root.setError(error);
      this.loading = false;
    }
  };

  updateMe = async (data) => {
    try {
      let token = getToken();
      if (this?.user?.id || !token) {
        return;
      }
      this.loading = true;
      await this?.root?.api?.me?.update({ data: data }).then((res) => {
        runInAction(() => {
          this.user = res?.data?.data;
          this.logged = true;
          this.loading = false;
        });
      });
      await this.fetchMe();
    } catch (error) {
      console.log(error, "error me updateMe");
      this.loading = false;
    }
  };

  createFriends = async (data) => {
    await this.root.api.me.createFriends(data);
  };

  createFriends = async (data) => {
    await this.root.api.me.createFriends(data);
  };

  get isAuth() {
    return this.logged;
  }

  async logout() {
    try {
      this.user = null;
      this.logged = false;
      await removeToken();
      await removeFromStorage("rememberMe");
    } catch (error) {
      this.user = null;
      await removeToken();
      await removeFromStorage("rememberMe");
      console.log(error, " error - auth logout");
    }
  }

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
    this.api = this.root.api.me;
  }
}
