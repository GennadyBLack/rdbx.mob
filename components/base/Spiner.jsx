import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Modal } from "react-native";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

const Spiner = () => {
  const root = useStore();

  useEffect(() => {
    console.log(root.getSpiner.spiner, "rootrootroot");
  }, [root]);

  return (
    <Modal visible={root.getSpiner.spiner}>
      <View style={[styles.container, styles.horizontal]}>
        <Text>{root.getSpiner.spiner ? "true" : "false"}</Text>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default observer(Spiner);
