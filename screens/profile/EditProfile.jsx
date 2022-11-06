import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import Form from "../../components/validation/Form";
import prepareEdit from "../../helpers/editHelper";

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
        <Form.Input name="username" placeholder="Имя" label="Имя" />
        <Form.Input name="title" placeholder="Статус" label="Статус" />
        <Form.Input
          name="description"
          placeholder="Описание"
          label="Описание"
        />
        <Form.Input name="city" placeholder="Город" label="Город" />
        <Form.Input name="email" placeholder="Почта" label="ИПочтамя" />
        <Form.Input name="tel" placeholder="Телефон" label="Телефон" />
      </Form>
    </View>
  );
};

export default observer(EditProfileImage);
