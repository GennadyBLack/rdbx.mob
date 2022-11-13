import React from "react";
import { Text, View } from "react-native";
import Comment from "../../components/comment/Comment";
import ScrollList from "../../components/list/ScrollList";
import Form from "../../components/validation/Form";
const PostComments = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollList
        method="feed.getComments"
        queries={{ "filter[feedId]": id }}
        ListHeaderComponent={ProfilePageHeader}
        style={{ flex: 1 }}
        Component={Comment}
      />
    </View>
  );
};
export default PostComments;
