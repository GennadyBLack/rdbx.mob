import React from "react";
import s, { getStyle } from "../../helpers/styleHelper";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { apiUrl } from "../../api";
const { height, width } = Dimensions.get("window");
const SIZE = width;
//   {moment(feed?.createdAt).startOf("minutes").fromNow()}
const ProfilePost = ({ item }) => {
  return (
    <View style={[styles.feed_wrapper]}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: `${apiUrl}/files/${item?.poster || "placeholder.png"}`,
          }}
          resizeMode="cover"
          style={[s.br, s.lex, styles.image, { overflow: "hidden" }]}
        ></ImageBackground>
      </View>
      <View>
        <Text>{item?.title}</Text>
      </View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  feed_wrapper: {
    padding: 5,
    overflow: "visible",
    elevation: 10,
    borderRadius: 10,
    height: SIZE * 1.3,
    marginBottom: 10,
    backgroundColor: "white",
  },
  header_info: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feed_header: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 70,
    zIndex: 1,
  },
  author_img: {
    margin: 7,
  },
  header_menu: {
    justifyContent: "center",
    fontSize: 20,
    alignItems: "center",
    padding: 10,
    color: "black",
  },
  author_name: {
    color: "black",
    fontSize: 20,
  },
  feed_created_at: {
    color: "grey",
    fontSize: 14,
  },
  feed_title: {
    color: "black",
  },
  feed_image: {
    // backgroundColor: feed?.path ? "" : "#b7b5b5",
    height: 200,
  },

  image: {
    // ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default ProfilePost;
