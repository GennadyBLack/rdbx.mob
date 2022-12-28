import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

const Words = ({ words }) => {
  const gueesedWordLength = useMemo(() => {
    try {
      return Object.values(words).filter((item) => {
        return item.guessed;
      }).length;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }, [words]);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#eee",
        flexWrap: "wrap",
      }}
    >
      <Text>
        Guessed {gueesedWordLength} of {Object.keys(words)?.length}
      </Text>
      {Object.values(words).map((item, idx) => {
        return (
          <View style={{ padding: 10 }} key={idx}>
            <Text style={{ color: `${item.guessed ? "green" : "black"}` }}>
              {item.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Words;
