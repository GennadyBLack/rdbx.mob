import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Platform,} from 'react-native';
import React, { useCallback, useEffect, useState } from "react";
import * as Network from "expo-network";
import * as Device from "expo-device";
import useLocation from "./hooks/useLocation"
import Routes from './components/base/Routes';


import {
  getFromStorage,
  getToken,
  removeFromStorage,
  removeToken,
  setInStorage,
} from "./helpers/storage";



import store from "./store/index";

import StoreContext from "./context";

const rootStore = new store();
import ErrorPopupList from "./components/base/ErrorPopupList";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { io } from "socket.io-client";
import { baseURL } from "./api";


export default function App() {
  let [isReady, setReady] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const initialApp = async () => {
      try {
        if (!location) {
          console.error("Не удалось определить ваше местоположение");
          return;
        }
        await Network.getNetworkStateAsync().then((res) => {
          rootStore.setInternetConnection(res.isInternetReachable);
          rootStore.setError({
            message: "Отсутствует подключение к интернету дружочек",
          });
        });
        const remember = await getFromStorage("rememberMe");
        if (!remember || remember == "false") await removeToken();

        rootStore.auth.location = location;
        rootStore.auth.device = `${Device.brand} ${Device.modelName} - ${Device.osName}:${Device.osVersion}`;
        if (Platform.OS === "web") {
          rootStore.auth.device = `${Device.osName} ${
            Device.manufacturer || ""
          } ${Device.modelName || ""}`;
        }

        await new Promise((resolve) => {
          let res = rootStore.auth.fetchMe(location);
          resolve(res, "SuperRes");
        });

        const iniOptions = {
          reconnection: true,
          auth: {
            token: await getToken(),
          },
        };

        const socket = io(baseURL, iniOptions);
        // console.log("iniOptions", socket);
        socket.emit("ping");
        socket.on("ping", () => {
          console.log("ping");
        });
        socket.on("pong", () => {
          console.log("pong");
        });
        socket.on("connection", () => {
          console.log("socket was connected succesfull");
        });
      } catch (e) {
        console.error(e);
      } finally {
        // Tell the application to render
        setReady(true);
      }
    };
    initialApp();
  }, [location]);
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StoreContext.Provider value={rootStore}>
      <ErrorPopupList className="errors" />
      <Routes/>
      </StoreContext.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
