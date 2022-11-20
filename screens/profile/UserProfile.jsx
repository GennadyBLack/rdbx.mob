import React, { useState } from "react";
import { View, ScrollView, Pressable, Text } from "react-native";
import ScanerQr from "../../components/base/ScanerQr";
import ProfilePost from "../../components/profile/ProfilePost";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ModalSheet from "../../components/base/ModalSheet";
import Form from "../../components/validation/Form";
import PostItemList from "../../components/post/PostItemList";
import ScrollList from "../../components/list/ScrollList";
import apis from "../../api/api";

import Spiner from "../../components/base/Spiner";
import ProfilePageHeader from "../../components/profile/ProfilePageHeader";
import { getIcon } from "../../helpers/iconHelper";

const UserProfile = ({ navigation }) => {
  const [auth] = useStore("auth");
  const [active, toggle] = ModalSheet.useModal();
  const [activeQr, toggleQr] = ModalSheet.useModal();

  const sendCode = async (val) => {
    console.log(apis.methodts, "apis.media.confirm_ticket_use_by_code");
    await apis?.methodts
      ?.confirm_ticket_use_by_code(val)
      .then((res) => {
        console.error(res.status, "res.status");
        if (res.status === 500 || res.message) {
          root.setError(res.data);
        }
      })
      .catch((error) => {
        auth.root.setError(error.response.data);
      });

    console.log(val, "sendCode");
  };
  const getQrCode = (data) => {
    const pre = data.split("/").pop();
    console.log(pre, "preeeee-----");
    toggleQr(!activeQr);
    sendCode({ code: pre });
  };

  return (
    <View {...getStyle("flex.p_2.primary_bg", { padding: 20 })}>
      <View style={{ flex: 1 }}>
        <ScrollList
          ListHeaderComponent={
            <View>
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
            </View>
          }
          Component={PostItemList}
          method="cabinet.get_multiple_ticket_by_filter"
        ></ScrollList>
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
        <ScanerQr setData={getQrCode} />
      </ModalSheet>
    </View>
  );
};

export default observer(UserProfile);
