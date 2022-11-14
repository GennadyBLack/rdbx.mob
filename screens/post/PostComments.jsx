import React from "react";
import { Text, View } from "react-native";
import Comment from "../../components/comment/Comment";
import ScrollList from "../../components/list/ScrollList";
import Form from "../../components/validation/Form";
import { useRoute } from "@react-navigation/native";
import s from "../../helpers/styleHelper";
import apis from "../../api/api";

const PostComments = () => {
  const submit = async (data) => {
    await apis.feed.createComment(id, data);
  };
  const id = useRoute().params.id;
  return (
    <View style={{ flex: 1 }}>
      <ScrollList
        method="feed.getComments"
        queries={{ include: "user" }}
        style={{ flex: 1 }}
        Component={Comment}
        inverted
      />
      <View>
        <Form onSubmit={submit}>
          <Form.Input
            name="title"
            placeholder="Text"
            label="Text"
            mode="outlined"
            style={s.mb_3}
          />
        </Form>
      </View>
    </View>
  );
};
export default PostComments;
