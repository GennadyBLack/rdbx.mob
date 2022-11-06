import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import Form from "../../components/validation/Form";
import prepareEdit from "../../helpers/editHelper";
import s from "../../helpers/styleHelper";

const EditProfileImage = () => {
  const [tools] = useStore("tools");
  const [auth] = useStore("auth");

  const user = auth?.user?.user;

  const submit = async (e) => {
    const pre = prepareEdit(e, user);
    await auth?.updateMe(pre);
  };

  return (
    <View>
      <Form onSubmit={submit} defaultValues={user} resetForm={false}>
        <Form.Input
          name="username"
          placeholder="Имя"
          label="Имя"
          mode="outlined"
          style={s.mb_3}
        />
        <Form.Input
          style={s.mb_3}
          name="title"
          placeholder="Статус"
          label="Статус"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="description"
          placeholder="Описание"
          label="Описание"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="city"
          placeholder="Город"
          label="Город"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="email"
          placeholder="Почта"
          label="ИПочтамя"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="tel"
          placeholder="Телефон"
          label="Телефон"
          mode="outlined"
        />
      </Form>
    </View>
  );
};

export default observer(EditProfileImage);
