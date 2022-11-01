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
  // const location = useLocation();


useEffect(() => {
    const initialApp = async () => {
      try {
        await Network.getNetworkStateAsync().then((res) => {
          rootStore.setInternetConnection(res.isInternetReachable);
          rootStore.setError({
            message: "Отсутствует подключение к интернету дружочек",
          });
        });
        await new Promise((resolve) => {
          let res = rootStore.auth.fetchMe();
          resolve(res, "SuperRes");
        });
        // console.log(await getToken());
        // const iniOptions = {
        //   reconnection: true,
        //   auth: {
        //     token: await getToken(),
        //   },
        // };
        //
        // const socket = io(baseURL, iniOptions);
        // console.log("iniOptions", socket);
        // socket.emit("ping");
        // socket.on("ping", () => {
        //   console.log("ping");
        // });
        // socket.on("pong", () => {
        //   console.log("pong");
        // });
        // socket.on("connection", () => {
        //   console.log("socket was connected succesfull");
        // });
      } catch (e) {
        console.error(e);
      } finally {
        // Tell the application to render
        setReady(true);
      }
    };
    initialApp();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
    
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

  },
});
