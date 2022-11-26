import React, { useState, useRef, useEffect } from "react";

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
  useSharedValue,
} from "react-native-reanimated";

// const { height, width } = Dimensions.get("window");

const Pick = ({
  items = [],
  customClass = {},
  value,
  placeholder,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  const elemP = useSharedValue({ x: 0, y: 0 });
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
  const ref = useRef();

  const toggleButton = () => {
    return (
      <Pressable
        onPress={toggle}
        style={[
          {
            height: 60,
            width: "100%",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "black",
            // alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          },
          customClass,
        ]}
      >
        <View
          onLayout={(event) => {
            if (Platform.OS === "web") {
              event?.nativeEvent?.target?.measure((...rest) => {
                elemP.value = { x: 0, y: rest[5] };
              });
            } else {
              event?.target?.measure((...rest) => {
                elemP.value = { x: 0, y: rest[5] };
              });
            }
          }}
          ref={ref}
        >
          <View>
            <View>
              <Text style={{ marginLeft: 20 }}>
                {value ? getActiveItem()?.label : placeholder}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const modalStyle = useAnimatedStyle(() => {
    return {
      right: elemP?.value?.x + 30 ?? 30,
      top: elemP?.value?.y + 60 ?? 0 + 60,
    };
  });

  if (!items.length) {
    return <Text>Нет данных</Text>;
  }
  return (
    <View
      style={{
        zIndex: 1000000,
        position: "relative",
      }}
    >
      <View>
        {toggleButton()}
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
              <Animated.View
                style={[styles.menu, modalStyle]}
                onLayout={(event) => {
                  const layout = event.nativeEvent.layout;
                }}
              >
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
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    zIndex: 10,
    padding: 20,
  },
  menu: {
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
