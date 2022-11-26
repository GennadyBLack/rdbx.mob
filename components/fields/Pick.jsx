import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  Platform,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useAnimatedRef,
  useSharedValue,
  measure,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";

const Pick = ({
  items = [],
  customClass = {},
  value,
  placeholder,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useAnimatedRef();
  const openMenu = () => setVisible(true);

  const toggle = () => {
    setVisible(!visible);
  };

  const getActiveItem = () => {
    return items.find((item) => {
      return item.value === value;
    });
  };

  const closeMenu = () => setVisible(false);

  const modalStyle = useAnimatedStyle(() => {
    const d = measure(ref);
    console.log(d, "DDDD");
    return {
      top: d,
    };
  });

  if (!items.length) {
    return <Text>Нет данных</Text>;
  }
  return (
    <Animated.View
      style={{
        zIndex: 1000000,
        position: "relative",
      }}
    >
      <View ref={ref}>
        <Pressable
          onPress={() => toggle()}
          style={[
            {
              height: 60,
              width: "100%",
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "black",
              justifyContent: "center",
              borderRadius: 5,
            },
            customClass,
          ]}
        >
          <View>
            <View>
              <View>
                <Text style={{ marginLeft: 20 }}>
                  {value ? getActiveItem()?.label : placeholder}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <View style={styles.menu}>
          <Modal
            contentContainerStyle={{
              borderRadius: 10,
              borderColor: "#eee",
              borderWidth: 1,
              backgroundColor: "white",
              position: "absolute",
              right: 10,
            }}
            visible={visible}
            transparent={true}
          >
            <Pressable onPress={() => setVisible(false)} style={{ flex: 1 }}>
              <Animated.View style={[styles.menu, modalStyle]}>
                {items.map((item, idx) => {
                  return (
                    <View style={{ zIndex: 10000 }} key={idx}>
                      {item?.icon ? <Text>{item?.icon}</Text> : <Text></Text>}
                      <Pressable
                        key={idx}
                        onPress={() => {
                          typeof onChange === "function"
                            ? onChange(item?.value)
                            : null;
                          setVisible(false);
                        }}
                        style={[
                          styles?.menuItem,
                          {
                            backgroundColor: `${
                              value === item.value ? "#86e9b0" : "white"
                            }`,
                          },
                        ]}
                      >
                        <Text>{item?.label}</Text>
                      </Pressable>
                    </View>
                  );
                })}
              </Animated.View>
            </Pressable>
          </Modal>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    zIndex: 10,
    padding: 20,
  },
  menu: {
    maxHeight: 300,
    overflow: "scroll",
    width: "90%",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    backgroundColor: "white",
    position: "absolute",
  },
  index: {
    zIndex: 100,
  },
});

export default Pick;
