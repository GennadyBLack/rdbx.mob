import React, { useState } from "react";
import { View, ScrollView, Pressable, Text } from "react-native";
import ScanerQr from "../../components/base/ScanerQr";
import ProfilePost from "../../components/profile/ProfilePost";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ModalSheet from "../../components/base/ModalSheet";
import Form from "../../components/validation/Form";

import Spiner from "../../components/base/Spiner";
import ProfilePageHeader from "../../components/profile/ProfilePageHeader";
import { getIcon } from "../../helpers/iconHelper";

const UserProfile = ({ navigation }) => {
  const [auth] = useStore("auth");
  const [active, toggle] = ModalSheet.useModal();
  const [activeQr, toggleQr] = ModalSheet.useModal();

  const sendCode = (val) => {
    console.log(val, "sendCode");
  };
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
        <Pressable
          onPress={() => {
            toggleQr();
          }}
        >
          <Text>{getIcon("qr")}</Text>
        </Pressable>
      </View>
      <Spiner loading={auth.loading} />
      <ModalSheet visible={active} toggle={toggle}>
        <Form onSubmit={sendCode}>
          <Form.Input
            name="code"
            placeholder="Номер билета"
            label="Номер билета"
            mode="outlined"
            style={s.mb_3}
            keyboardType="numeric"
          />
        </Form>
      </ModalSheet>
      <ModalSheet visible={activeQr} toggle={toggleQr}>
        <ScanerQr />
      </ModalSheet>
    </ScrollView>
  );
};

export default observer(UserProfile);
