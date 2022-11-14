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

export default observer(Register);

const { height } = Dimensions.get("window");
function Register({ navigation }) {
  let [auth] = useStore("auth");

  let [form, setForm] = useState({
    name: "",
    email: "",
    last_name: "",
    accept_confidence_license: true,
    accept_personal_license: true,
  });

  let setText = (e, field) => {
    setForm({ ...form, [field]: e });
  };

  let register = async () => {
    await auth.register(form);
    navigation.navigate("RegisterSetPassword");
  };

  return (
    <Animated.View style={[styles.register_wrapper]}>
      <Text style={styles.welcome}>Регистрация !</Text>
      <Animated.View style={[styles.register_content]}>
        <TextInput
          mode="outlined"
          style={{ marginBottom: 20 }}
          label="Имя"
          value={form?.name}
          onChangeText={(text) => setText(text, "name")}
        />
        <TextInput
          mode="outlined"
          style={{ marginBottom: 20 }}
          label="Email"
          value={form?.email}
          onChangeText={(text) => setText(text, "email")}
        />
        <TextInput
          mode="outlined"
          style={{ marginBottom: 20 }}
          label="Фамилия"
          value={form?.last_name}
          onChangeText={(text) => setText(text, "last_name")}
        />
        <Pressable
          style={[s.button, { marginTop: 20 }]}
          onPress={() => register()}
          color="#841584"
        >
          <Text style={[{ color: "white", fontSize: 15 }]}>Регистрация</Text>
        </Pressable>

        <Pressable
          style={[{ marginTop: 20 }]}
          onPress={() => navigation.navigate("Login")}
          color="#841584"
        >
          <Text style={{ color: constants.GREEN }}>Eже есть аккаунт ?</Text>
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
