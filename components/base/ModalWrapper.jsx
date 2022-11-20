import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BaseTopMenu from "./BaseTopMenu";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { observer } from "mobx-react";
import LeftMenu from "./LeftMenu";

const ModalWrapper = ({ children, props }) => {
  const opacity = useSharedValue(1);

  const mainWrappStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar />
      <Animated.View
        style={[styles.containerModal, mainWrappStyle]}
        nativeID="modelV"
      >
        <BaseTopMenu />
        {children}
        {/* <LeftMenu /> */}
      </Animated.View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    color: "white",
    flexDirection: "column",
  },
});

export default observer(ModalWrapper);
