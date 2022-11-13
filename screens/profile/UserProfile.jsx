import React from "react";
import { View } from "react-native";
import ProfilePost from "../../components/profile/ProfilePost";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

import Spiner from "../../components/base/Spiner";
import ScrollList from "../../components/list/ScrollList";
import ProfilePageHeader from "../../components/profile/ProfilePageHeader";
import { useRoute } from "@react-navigation/native";

const UserProfile = ({ navigation }) => {
  const [auth] = useStore("auth");
  const [users] = useStore("users");

  const id = useRoute()?.params?.id;
  return (
    <View {...getStyle("flex.p_2.primary_bg")}>
      <ScrollList
        method="feed.getAll"
        queries={{ "filter[userId]": id }}
        ListHeaderComponent={ProfilePageHeader}
        style={{ flex: 1 }}
        keys={(item) => item.id}
        Component={ProfilePost}
      />
      <Spiner loading={users.loading} />
    </View>
  );
};

export default observer(UserProfile);
