import React from "react";
import { View, Text } from "react-native";
import PostItemList from "../../components/post/PostItemList";
import ScrollList from "../../components/list/ScrollList";

const Public = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollList
        Component={PostItemList}
        method="publics.actual_activities"
      ></ScrollList>
    </View>
  );
};

export default Public;
