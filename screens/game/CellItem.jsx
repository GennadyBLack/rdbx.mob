import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import logHelper from "../../helpers/logHelper";

const minHW = 70;

const CellItem = ({
  letter,
  area,
  position,
  color,
  selectLetter,
  selectedLetters,
}) => {
  useEffect(() => {}, [letter]);
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    if (letter.guessed) {
      return;
    }
    // console.log(layout?.y, layout?.x);
    if (
      position?.y >= layout?.y - 70 &&
      position?.y <= layout?.y &&
      position?.x >= layout?.x &&
      position?.x <= layout?.x + 70
    ) {
      selectLetter(letter.key);
    }
  }, [position]);
  return (
    <View
      onLayout={(e) => {
        if (Platform.OS === "web") {
          const pre = {
            y: e.nativeEvent.layout.top,
            x: e.nativeEvent.layout.left,
          };
          setLayout(pre);
        } else {
          e?.target?.measure((...rest) => {
            const pre = {
              y: rest[5],
              x: rest[4],
            };
            setLayout(pre);
          });
        }
      }}
    >
      <View
        style={[
          styles.letter,
          {
            backgroundColor: `${
              selectedLetters.includes(letter.key)
                ? "green"
                : letter.guessed
                ? "grey"
                : "white"
            }`,
          },
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
