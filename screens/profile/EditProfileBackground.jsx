import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import Form from "../../components/validation/Form";
import prepareEdit from "../../helpers/editHelper";

const EditProfileBackground = () => {
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
        <Form.File name="avatarBackground" title="Загрузить фото профиля" />
      </Form>
    </View>
  );
};

export default observer(EditProfileBackground);
