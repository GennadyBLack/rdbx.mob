import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import { TextInput } from "react-native-paper";
import Animated from "react-native-reanimated";
import apis from "../../api/api";
import s, { constants } from "../../helpers/styleHelper";

export default observer(RegisterSetPassword);

const { height } = Dimensions.get("window");

function RegisterSetPassword({ navigation }) {
  let [auth] = useStore("auth");

  let [form, setForm] = useState({
    token: auth?.register_token?.data?.meta?.debug_access_token,
    password_confirmation: "",
    password: "",
  });

  let setText = (e, field) => {
    setForm({ ...form, [field]: e });
  };

  let register = () => {
    auth.registerSetPassword(form);
  };

  return (
    <Animated.View style={[styles.register_wrapper]}>
      <Text style={styles.welcome}>Регистрация !</Text>
      <Animated.View style={[styles.register_content]}>
        <TextInput
          mode="outlined"
          style={{ marginBottom: 20 }}
          label="Пароль"
          value={form?.password}
          onChangeText={(text) => setText(text, "password")}
        />

        <TextInput
          mode="outlined"
          style={{ marginBottom: 20 }}
          label="Пароль еще раз"
          value={form?.password_confirmation}
          onChangeText={(text) => setText(text, "password_confirmation")}
        />
        <Pressable
          style={[s.button, { marginTop: 20 }]}
          onPress={() => register()}
          color="#841584"
        >
          <Text style={[{ color: "white", fontSize: 15 }]}>Регистрация</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  register_wrapper: {
    flex: 1,
    backgroundColor: "#66bfbf",
  },
  register_content: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    height: height / 1.2,
    backgroundColor: "#eee",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  // button: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingVertical: 12,
  //   paddingHorizontal: 32,
  //   borderRadius: 4,
  //   elevation: 3,
  //   color: "white",
  //   backgroundColor: "#66bfbf",
  //   borderRadius: 20,
  // },
  welcome: {
    paddingTop: height - height / 1.2,
    fontSize: 40,
    fontStyle: "normal",
    color: "white",
  },
});
