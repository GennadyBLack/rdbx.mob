import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as Network from "expo-network";
import * as Device from "expo-device";
import Routes from "./components/base/Routes";
import s from "./helpers/styleHelper";
import storage from "./helpers/storage";

import store from "./store/index";

import StoreContext from "./context";

const rootStore = new store();

import ErrorPopupList from "./components/base/ErrorPopupList";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import io from "./assets/soket/soket";
import { baseURL } from "./api";

export default function App() {
  let [isReady, setReady] = useState(false);

  useEffect(() => {
    const initialApp = async () => {
      try {
        await rootStore.setPin();
        await rootStore.setToken();
        await rootStore.setSettings();
        await rootStore.fetchNotify();
        await Network.getNetworkStateAsync().then((res) => {
          rootStore.setInternetConnection(res.isInternetReachable);
          !res.isInternetReachable
            ? rootStore.setError({
                message: `Отсутствует подключение к интернету${res.isInternetReachable}`,
              })
            : null;
        });

        await new Promise((resolve) => {
          // rootStore.auth.fetchMe();
          resolve({}, "SuperRes");
        });

        const iniOptions = {
          reconnection: true,
          timeout: 20000,
          auth: {
            token: await storage.get("token"),
          },
        };

        // const socket = io(baseURL, iniOptions);
        // socket.on("connect", function () {
        //   console.log("connect");
        // });
        // socket.on("event", function (data) {
        //   console.log("event");
        // });
        // socket.on("disconnect", function () {
        //   console.log("disconnect");
        // });

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
    <StoreContext.Provider value={rootStore}>
      <StatusBar />
      <SafeAreaView
        style={[styles.container, s.lpink_bg]}
        onLayout={onLayoutRootView}
      >
        <ErrorPopupList />
        <Routes />
        <StatusBar style="auto" />
      </SafeAreaView>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
