import React from "react";
import { View, Text } from "react-native";
import s, { constants } from "../../helpers/styleHelper";

const PostItemList = ({ item, included }) => {
  console.log(item, "IIIITEEEEM");
  return (
    <View
      style={[
        s.ruby_bg,
        {
          padding: 10,
          margin: 7,
          height: 80,
          borderRadius: 10,
          justifyContent: "space-around",
          flexDirection: "row",
          backgroundColor: constants.GREEN,

          alignItems: "center",
        },
      ]}
    >
      <Text>№{item?.id}</Text>
      <View>{item?.ticket_type?.attributes?.title ?? " "}</View>
      <View style={{ flexDirection: "column" }}>
        <Text>{item?.date?.attributes?.start_date ?? " "}</Text>
        <Text>{item?.date?.attributes?.start_time ?? " "}</Text>
      </View>
    </View>
  );
};

export default PostItemList;
