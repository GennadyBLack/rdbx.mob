import React from "react";
import { View, Text } from "react-native";
import ScrollList from "../../components/list/ScrollList";
const ProfileNews = () => {
  return (
    <ScrollList
      method="feed.getSubsribePosts"
      queries={{ include: "user" }}
      style={{ flex: 1 }}
      Component={Comment}
      inverted
    />
  );
};
//getSubsribePosts
export default ProfileNews;
