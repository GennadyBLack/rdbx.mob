import React from "react";
import useStore from "../../hooks/useStore";
import { View } from "react-native";
import Form from "../validation/Form";
import { observer } from "mobx-react-lite";
import apis from "../../api/api";
import s from "../../helpers/styleHelper";

const PasswordChange = () => {
  //   const [root] = useStore("");
  const change_password = async (data) => {
    await apis.cabinet.change_password_authorized_user(data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Form onSubmit={change_password}>
        <Form.Input
          style={s.mb_3}
          name="password"
          placeholder="Пароль"
          label="Пароль"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="password_confirmation"
          placeholder="Повтор пароля"
          label="Повтор пароля"
          mode="outlined"
        />
      </Form>
    </View>
  );
};

export default PasswordChange;
