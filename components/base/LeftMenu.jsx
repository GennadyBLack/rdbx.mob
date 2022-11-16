import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";

import s, { getStyle } from "../../helpers/styleHelper";
import { getIcon } from "../../helpers/iconHelper";
import LeftMenuHeader from "../menu/LeftMenuHeader";
import {
  View,
  StatusBar,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import useStore from "../../hooks/useStore";
import { useNavigation } from "@react-navigation/native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const deleteVar = 1.3;
const LeftMenu = () => {
  const [menu] = useStore("menu");
  const [auth] = useStore("auth");
  const navigation = useNavigation();

  const active = useSharedValue(false);

  const rStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      active.value,
      [true, false],
      [0, -SCREEN_WIDTH / deleteVar - 1],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateX: translateX }],
    };
  });

  const bStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      active.value,
      [true, false],
      [0, -SCREEN_WIDTH],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateX: translateX }],
    };
  });

  const toggleMenu = useCallback(() => {
    "worklet";
    active.value = !active.value;
  }, []);

  return (
    <Animated.View style={[styles.back, bStyle]}>
      <StatusBar />
      <View
        style={{
          position: "absolute",
          top: 10,
          right: -50,
        }}
      >
        <TouchableHighlight
          onPress={() => {
            toggleMenu();
          }}
        >
          <Animated.View>
            {!active.value && <Text>{getIcon("menu", "black", 40)}</Text>}
          </Animated.View>
        </TouchableHighlight>
      </View>

      <TouchableHighlight
        style={{ backgroundColor: "white", flex: 1, opacity: 0.1 }}
        onPress={() => {
          toggleMenu();
        }}
      >
        <Text></Text>
      </TouchableHighlight>

      <Animated.View style={[styles.left_menu_wrapper, rStyle]}>
        <View
          style={[s.prymary_bg, { flex: 1, justifyContent: "space-between" }]}
        >
          <View>
            <StatusBar />
            <LeftMenuHeader toggle={toggleMenu} />
            <View>
              {menu?.leftRoutes.map((item, idx) => {
                return (
                  <TouchableHighlight
                    key={idx}
                    style={{
                      padding: 10,
                    }}
                    onPress={() => {
                      navigation.navigate(item?.name);
                      toggleMenu();
                    }}
                  >
                    <View {...getStyle("a_i_center", { flexDirection: "row" })}>
                      <Text> {getIcon(item.icon)}</Text>
                      <Text style={styles.menu_link}>{item?.title}</Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </View>
          </View>

          <View>
            {auth.logged ? (
              <TouchableHighlight
                onPress={() => {
                  auth.logout();
                  toggleMenu();
                }}
                style={{
                  padding: 10,
                }}
              >
                <Text style={styles.menu_link}>{getIcon("exit")}</Text>
              </TouchableHighlight>
            ) : (
              <Text></Text>
            )}
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  left_menu_wrapper: {
    flex: 1,
    width: SCREEN_WIDTH / deleteVar,
    height: SCREEN_HEIGHT,
    backgroundColor: "#eee",
    position: "absolute",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 10,
  },
  back: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "absolute",
  },
  menu_link: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    padding: 10,
    fontWeight: "600",
  },
});

export default observer(LeftMenu);
