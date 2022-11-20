import React from "react";
import { View, Text } from "react-native";

import s from "../../helpers/styleHelper";

const NotificationListItem = ({ item }) => {
  console.log(item, "ITEM");
  return (
    <View
      style={[
        {
          overflow: "scroll",
          height: 80,
          borderRadius: 10,
          backgroundColor: "white",
          padding: 20,
          margin: 10,
        },
      ]}
    >
      <Text> {item?.attributes?.message}</Text>
    </View>
  );
};
export default NotificationListItem;
