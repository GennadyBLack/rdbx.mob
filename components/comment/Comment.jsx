import React from "react";
import { Text, View, StyleSheet } from "react-native";
import s from "../../helpers/styleHelper";
import ProfileImg from "../profile/ProfileImg";

const Comment = ({ item }) => {
  return (
    <View style={styles.comment_wrap}>
      <View>
        <ProfileImg path={item?.user?.avatar} width={50} />
      </View>
      <View style={{ justifyContent: "flex-start" }}>
        <Text style={styles.author_name}>{item?.user?.username}</Text>
        <Text>{item?.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comment_wrap: {
    borderRadius: 5,
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    flexDirection: "row",
    minHeight: 60,
    // justifyContent: "space-between",
  },

  author_name: {
    fontSize: 20,
  },
});

export default Comment;
