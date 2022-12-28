import react from "react";
import { View, Text, StyleSheet } from "react-native";

const Words = ({ words }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#eee",
        flexWrap: "wrap",
      }}
    >
      <Text>All words</Text>
      {Object.values(words).map((item, idx) => {
        return (
          <View style={{ padding: 10 }} key={idx}>
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Words;
