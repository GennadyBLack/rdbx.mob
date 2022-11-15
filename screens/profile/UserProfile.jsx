import React from "react";
import { View, ScrollView } from "react-native";
import ProfilePost from "../../components/profile/ProfilePost";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

import Spiner from "../../components/base/Spiner";
import ProfilePageHeader from "../../components/profile/ProfilePageHeader";

const UserProfile = ({ navigation }) => {
  const [auth] = useStore("auth");
  return (
    <ScrollView {...getStyle("flex.p_2.primary_bg")}>
      <ProfilePageHeader />
      <Spiner loading={auth.loading} />
    </ScrollView>
  );
};

export default observer(UserProfile);
