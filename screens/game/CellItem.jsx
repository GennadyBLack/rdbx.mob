import React, { useRef, useEffect, useState } from "react";
import { View, Text, PanResponder, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import logHelper from "../../helpers/logHelper";
const minHW = 60;

const CellItem = ({ letter, area, position }) => {
  useEffect(() => {}, [letter]);
  const [layout, setLayout] = useState(null);

  const gesture = Gesture.Pan()
    .onBegin((e) => {})
    ?.onUpdate((e) => {
      //   console.log(e);
    })
    .onEnd(() => {});

  useEffect(() => {
    console.log(position, "position");
    console.log(layout, "layout");
  }, [position]);
  return (
    <View
      onLayout={(e) => {
        const pre = {
          y: e.nativeEvent.layout.left,
          x: e.nativeEvent.layout.top,
        };
        setLayout(pre);
      }}
    >
      <View style={styles.letter}>
        <Text>
          {letter.letter ?? ""}
          {position?.y > layout?.y && position?.x >= layout?.x ? "()" : ""}
        </Text>
      </View>
    </View>
  );
};
export default CellItem;

const styles = StyleSheet.create({
  area: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  area_row: { flexDirection: "row" },
  letter: {
    minWidth: minHW,
    minHeight: minHW,
    borderColor: "black",
    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#eee",
  },
});
