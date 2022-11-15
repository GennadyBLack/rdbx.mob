import React from "react";
import { View, ScrollView, Pressable, Text } from "react-native";
import ScanerQr from "../../components/base/ScanerQr";
import ProfilePost from "../../components/profile/ProfilePost";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ModalSheet from "../../components/base/ModalSheet";

import Spiner from "../../components/base/Spiner";
import ProfilePageHeader from "../../components/profile/ProfilePageHeader";
import { getIcon } from "../../helpers/iconHelper";

const UserProfile = ({ navigation }) => {
  const [auth] = useStore("auth");
  const [active, toggle] = ModalSheet.useModal();
  return (
    <ScrollView {...getStyle("flex.p_2.primary_bg", { padding: 20 })}>
      <ProfilePageHeader />
      <View
        style={[
          s.prymary_bg,
          s.a_i_center,
          {
            height: 50,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          },
        ]}
      >
        <Pressable
          onPress={() => {
            toggle();
          }}
        >
          <Text>{getIcon("hand")}</Text>
        </Pressable>
        <Pressable onPress={() => {}}>
          <Text>{getIcon("qr")}</Text>
        </Pressable>
      </View>
      <Spiner loading={auth.loading} />
      <ModalSheet visible={active} toggle={toggle}>
        <Text>Hi</Text>
        <ScanerQr />
      </ModalSheet>
    </ScrollView>
  );
};

export default observer(UserProfile);
