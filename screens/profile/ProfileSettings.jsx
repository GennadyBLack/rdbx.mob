import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
import storage from "../../helpers/storage";
import { Switch } from "react-native-paper";
import s from "../../helpers/styleHelper";
import ModalSheet from "../../components/base/ModalSheet";
import PasswordChange from "../../components/profile/PasswordChange";

const ProfileSettings = () => {
  const initialvalue = {
    touch: false,
    light: false,
    single: false,
    vibration: false,
  };

  const [passwordModal, setPasswordModal] = useState(false);

  const [all, setAll] = useState(initialvalue);

  const getData = async () => {
    const data = await storage.get("settings");
    const pre = { ...initialvalue, ...data };
    setAll(pre);
  };

  useEffect(() => {
    getData();
  }, []);

  const setData = (key, value) => {
    const pre = { ...all, [key]: value };
    setAll(pre);
    storage.set("settings", pre);
  };
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <View style={s.settings_switch}>
        <Text>Отпечаток</Text>
        <Switch
          value={all.touch}
          onValueChange={(val) => {
            setData("touch", val);
          }}
        />
      </View>
      <View style={s.settings_switch}>
        <Text>Свет</Text>
        <Switch
          value={all?.light}
          onValueChange={(val) => {
            setData("light", val);
          }}
        />
      </View>
      <View style={s.settings_switch}>
        <Text>Вибрация</Text>
        <Switch
          value={all.vibration}
          onValueChange={(val) => {
            setData("vibration", val);
          }}
        />
      </View>
      <View style={s.settings_switch}>
        <Text>Звук</Text>
        <Switch
          value={all.single}
          onValueChange={(val) => {
            setData("single", val);
          }}
        />
      </View>
      <Pressable
        onPress={() => setPasswordModal(!passwordModal)}
        style={[s.settings_switch, { height: 56 }]}
      >
        <Text>Сменить пароль</Text>
      </Pressable>
      <ModalSheet
        visible={passwordModal}
        toggle={() => setPasswordModal(!passwordModal)}
      >
        <PasswordChange />
      </ModalSheet>
    </ScrollView>
  );
};

export default ProfileSettings;
