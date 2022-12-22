import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import Spiner from "../../components/base/Spiner";

import PinModal from "../../components/auth/PinModal";

import s, { constants } from "../../helpers/styleHelper";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import { TextInput } from "react-native-paper";
import Animated from "react-native-reanimated";
const { height, width } = Dimensions.get("window");
import useFingerPrint from "../../hooks/useFingerPring";
import { getToken } from "../../helpers/storage";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo.svg";
export default observer(Login);

function Login() {
  const navigation = useNavigation();
  let [auth] = useStore("auth");
  let [form, setForm] = useState({
    password: "",
    email: "",
  });

  const [content, handle] = useFingerPrint(async () => {
    await auth.fetchMe();
    await navigation.navigate("Public");
  });
  const regisrer = () => {
    navigation.navigate("Register");
  };

  let setText = (e, field) => {
    setForm({ ...form, [field]: e });
  };

  let login = async () => {
    await auth.login(form, () => navigation.navigate("Public"));
  };

  const loginLogic = async () => {
    const token = await getToken();
    if (token && auth?.root?.settings?.touch) {
      handle();
    }
  };

  useEffect(() => {
    loginLogic();
  }, []);

  return (
    <Animated.View
      style={[
        s.flex,
        { alignItems: "center", backgroundColor: "rgb(238 238 238)" },
      ]}
    >
      <Spiner loading={auth.loading} />
      <Image
        source={logo}
        style={[
          {
            height: 100,
            width: 100,
            borderRadius: 10,
            marginBottom: 40,
          },
        ]}
      />
      <Animated.View style={[styles.login_content, { width: "100%" }]}>
        <TextInput
          testID="login_email"
          mode="outlined"
          label="Email"
          value={form?.email}
          onChangeText={(text) => setText(text, "email")}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          testID="login_password"
          secureTextEntry
          mode="outlined"
          label="Password"
          type="password"
          value={form?.password}
          onChangeText={(text) => setText(text, "password")}
        />
        <Pressable
          testID="login_btn"
          onPress={() => {
            login();
          }}
          style={[s.button, { marginTop: 20 }]}
        >
          <Text style={[{ color: "white", fontSize: 15 }]}>Войти</Text>
        </Pressable>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Pressable
            onPress={() => {
              setForm({
                ...form,
                password: "ea1c2o1m",
                email: "i@rdbx.ru",
              });
            }}
          >
            <Text style={{ color: constants.GREEN }}>Заполнить</Text>
          </Pressable>
          <TouchableOpacity onPress={regisrer}>
            <Text style={{ color: constants.GREEN }}>Еще нет аккаунта ?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <View>
            {auth?.root?.settings?.touch && auth?.root?.token && content}
          </View>
          <PinModal
            token={auth?.root?.token}
            pin={auth?.root?.pin}
            show={
              !auth?.root?.settings?.touch &&
              auth?.root?.settings?.pin &&
              auth?.root?.pin &&
              auth?.root?.token
            }
            success={async () => await auth.fetchMe()}
          >
            <Spiner loading={auth?.loading} />
          </PinModal>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  login_content: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: height / 1.2,
    backgroundColor: "#eee",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  welcome: {
    paddingTop: height - height / 1.2,
    fontSize: 40,
    fontStyle: "normal",
    color: "white",
  },
});
