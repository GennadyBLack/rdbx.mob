// In App.js in a new project

import React, { useEffect, useState } from "react";
import { Linking, View, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spiner from "./Spiner";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { linking } from "../../helpers/menuHelper";
import { constants } from "../../helpers/styleHelper";

import useStore from "../../hooks/useStore";
import { Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Layout from "./Layout";

const { Screen, Navigator } = createNativeStackNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

function Routes() {
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = React.useState();

  const [routes, setRoutes] = useState([]);

  let [menu] = useStore("menu");
  let [auth] = useStore("auth");

  useEffect(() => {
    let mappedLinks = menu.allRoutes.map((item, inx) => {
      return (
        <Screen name={item?.name} options={item?.options} key={inx}>
          {(props) => (
            <Layout {...item}>
              <item.component {...props} extraData={item?.options} />
            </Layout>
          )}
        </Screen>
      );
    });
    setRoutes(mappedLinks);
  }, []);

  useEffect(() => {
    menu.setLeftRoutes();
  }, [auth.isAuth]);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        // Only restore state if there's no deep link and we're not on web
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        //Расскоментить, чтобы запускать приложение с последней посещенной страницы
        if (state !== undefined) {
          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <View>
        <Text>Loading...please wait</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer
        linking={linking}
        fallback={<Text>Loading...</Text>}
        style={styles.wrap}
        initialState={initialState}
        barStyle={{ backgroundColor: "#694fad" }}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
        <Navigator
          initialRouteName="Public"
          activeColor="#fff"
          inactiveColor={constants?.GREEN}
        >
          {routes}
        </Navigator>
      </NavigationContainer>
      <Spiner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {},
});
export default observer(Routes);
