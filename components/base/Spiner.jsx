import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Modal } from "react-native";

const Spiner = ({ loading = false }) => {
  return (
    <Modal visible={loading}>
      <View
        style={[styles.container, styles.horizontal]}
        transparent
        nativeID="spiner"
      >
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Spiner;
