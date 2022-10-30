import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
  return (
    <View style={styles.container}>
      <StoreContext.Provider value={rootStore}>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
