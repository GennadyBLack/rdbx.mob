import React from "react";
import { View, Text } from "react-native";
import { Badge } from "react-native-paper";

import s from "../../helpers/styleHelper";

const NotificationListItem = ({ item }) => {
  return (
    <View
      style={[
        {
          overflow: "scroll",
          height: 80,
          borderRadius: 10,
          backgroundColor: `${item?.meta?.is_new ? "green" : "white"}`,
          padding: 20,
          margin: 10,
        },
      ]}
    >
      <Text>
        <Badge
          style={{ backgroundColor: `${item?.meta?.is_new ? "red" : "green"}` }}
        >
          {item?.meta?.is_new ? "новое" : "прочитано"}
        </Badge>
      </Text>
      <Text> {item?.attributes?.message}</Text>
    </View>
  );
};
export default NotificationListItem;
