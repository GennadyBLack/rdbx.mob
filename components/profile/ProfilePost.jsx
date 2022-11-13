import React from "react";
import s, { getStyle } from "../../helpers/styleHelper";
import moment from "moment";
import {
  View,
  Pressable,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Share,
} from "react-native";
import { apiUrl } from "../../api";
const { height, width } = Dimensions.get("window");
const SIZE = width;
const ProfilePost = ({ item }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
        url: "google.com",
        title: "see on my nutc",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
        <Text style={styles.feed_created_at}>
          {moment(item?.createdAt).startOf("minutes").fromNow()}
        </Text>
        <Text>{item?.title}</Text>
        <Pressable>
          <Text>Все комментарии</Text>
        </Pressable>
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
