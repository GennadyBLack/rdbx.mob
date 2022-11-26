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

const Pick = ({
  items = [],
  customClass = {},
  value,
  placeholder,
  onChange,
  label,
}) => {
  const [visible, setVisible] = useState(false);
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

  if (!items.length) {
    return <Text>Нет данных</Text>;
  }
  return (
    <View
      style={{
        zIndex: 1000000,
        position: "relative",
        paddingBottom: 10,
      }}
    >
      <Text style={{ paddingTop: 10 }}>{label ? label : ""}</Text>
      <Pressable
        onPress={() => toggle()}
        style={[
          customClass,
          {
            height: 60,
            width: "100%",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 5,
          },
        ]}
      >
        <View style={{}}>
          <Text style={{ marginLeft: 20, marginTop: 20 }}>
            {value ? getActiveItem()?.label : placeholder}
          </Text>
        </View>

        <Modal
          style={{
            borderRadius: 10,
            borderColor: "#eee",
            borderWidth: 1,
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            position: "absolute",
            right: 0,
            left: 0,
          }}
          visible={visible}
          transparent={true}
        >
          <Pressable
            onPress={() => setVisible(false)}
            style={{
              flex: 1,
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={[styles.menu]}>
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
            </View>
          </Pressable>
        </Modal>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    zIndex: 10,
    padding: 20,
  },
  menu: {
    maxHeight: "50%",
    overflow: "scroll",
    width: "90%",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 2,
    backgroundColor: "white",
    position: "absolute",
  },
  index: {
    zIndex: 100,
  },
});

export default Pick;
