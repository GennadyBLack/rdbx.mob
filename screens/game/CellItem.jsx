import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import logHelper from "../../helpers/logHelper";

const minHW = 60;

const CellItem = ({ letter, area, position, color, selectLetter }) => {
  useEffect(() => {}, [letter]);
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    if (
      position?.y >= layout?.y - 58 &&
      position?.y <= layout?.y &&
      position?.x >= layout?.x &&
      position?.x <= layout?.x + 58
    ) {
      selectLetter(letter.key);
    }
  }, [position]);
  return (
    <View
      onLayout={(e) => {
        const pre = {
          y: e.nativeEvent.layout.top,
          x: e.nativeEvent.layout.left,
        };
        setLayout(pre);
      }}
    >
      <View
        style={[
          styles.letter,
          { backgroundColor: `${letter?.selected ? "green" : "white"}` },
        ]}
      >
        <Text>{letter.letter}</Text>
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
    overflow: "hidden",
  },
});
