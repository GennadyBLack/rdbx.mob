import React, { useState, useRef, useEffect } from "react";

import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const MenuToggler = ({ items = [], anchor, customClass = {} }) => {
  const [visible, setVisible] = useState(false);

  const elemP = useSharedValue({ x: 0, y: 0 });

  const openMenu = () => setVisible(true);
  const toggle = () => {
    setVisible(!visible);
  };

  const closeMenu = () => setVisible(false);
  const ref = useRef();

  const toggleButton = () => {
    return anchor ? (
      <View
        style={[customClass]}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          console.log(layout);
          elemP.value = { x: layout.y, y: layout.top };
        }}
        ref={ref}
      >
        <Pressable onPress={toggle}>{anchor}</Pressable>
      </View>
    ) : (
      <Pressable onPress={openMenu}>
        <Text>Show menu</Text>
      </Pressable>
    );
  };

  // useEffect(() => {
  //   const elem = { left: 100, top: 100 }; //ref.current.getBoundingClientRect();
  //   elemP.value = { x: elem.left, y: elem.top };
  // }, []);

  const modalStyle = useAnimatedStyle(() => {
    return {
      right: elemP.value.x + 30,
      top: elemP.value.y + 30,
    };
  });

  if (!items.length) {
    return <div>no</div>;
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
                  // console.log("height:", layout.height);
                  // console.log("width:", layout.width);
                  // console.log("x:", layout.x);
                  // console.log("y:", layout.y);
                }}
              >
                {items.map((item, idx) => {
                  return (
                    <View style={{ zIndex: 10000 }} key={idx}>
                      {item?.icon ?? <Text></Text>}
                      <Pressable
                        key={idx}
                        onPress={async () => {
                          typeof item?.onPress === "function"
                            ? await item?.onPress()
                            : null;
                          toggle();
                        }}
                        style={styles?.menuItem}
                      >
                        <Text> {item?.title}</Text>
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
    padding: 10,
  },
  menu: {
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

export default MenuToggler;
