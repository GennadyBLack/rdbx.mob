import React from "react";
import { View, Text } from "react-native";
import PostItemList from "../../components/post/PostItemList";
import ScrollList from "../../components/list/ScrollList";

const Recomendations = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollList
        Component={PostItemList}
        method="cabinet.get_references_activity"
      ></ScrollList>
    </View>
  );
};

export default Recomendations;
