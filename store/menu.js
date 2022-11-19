import { makeAutoObservable, runInAction } from "mobx";
import { availableLinks } from "../helpers/menuHelper";

export default class Menu {
  availableRoutes = [];
  left_menu = [];
  all_routes = availableLinks;
  data = {};
  left_menu_data = {};
  user_menu = {};

  activeRoute = null;

  get leftRoutes() {
    return this.left_menu;
  }

  setLeftRoutes() {
    const auth = this.root.auth.isAuth;

    this.left_menu = [
      ...this.all_routes.filter((item) => {
        if (item.type === "public" && item.leftMenu) {
          return true;
        }
        if (!auth && item.type === "auth" && item.leftMenu) {
          return true;
        } else if (auth && item.type === "private" && item.leftMenu) {
          return true;
        } else {
          return false;
        }
      }),
    ];
  }

  // auth - страница для авторизации

  setAvailableRoutes() {
    const auth = this.root.auth.isAuth;
    this.availableRoutes = [
      ...this.all_routes.filter((item) => {
        if (item.type === "public") {
          return true;
        }
        if (!auth && item.type === "auth") {
          return true;
        } else if (auth && item.type === "private") {
          return true;
        }
      }),
    ];
    console.log(this.availableRoutes, "availableRoutes");
  }

  get allRoutes() {
    return this.all_routes;
  }

  get filteredRoutes() {
    return this.all_routes.filter((item) => {
      const auth = this.root.auth.isAuth;
      try {
        if (auth && item?.auth) {
          return true;
        }
        if (!auth && !item.auth) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  constructor(root) {
    makeAutoObservable(this);
    this.root = root;
  }
}
