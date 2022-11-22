import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import storage from "../../helpers/storage";
import ModalSheet from "../base/ModalSheet";
import Form from "../validation/Form";
import s from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { getIcon } from "../../helpers/iconHelper";

const PinModal = ({ success, show, pin, token }) => {
  const root = useStore();
  const [visible, setVisible] = useState(() => {
    return show;
  });

  const submit = async (data) => {
    try {
      const pin = await storage.get("pin");
      if (pin === data.pin) {
        await success();
      } else {
        root.setError({ message: "не верный пин код" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Text nativeID="asds"></Text>
      <Pressable
        style={{ height: 30, width: 30 }}
        onPress={() => {
          setVisible(!visible);
        }}
      >
        {token && pin ? <Text>{getIcon("hand")}</Text> : <Text></Text>}
      </Pressable>
      <ModalSheet
        visible={visible}
        toggle={() => {
          setVisible(!visible);
        }}
      >
        <Form onSubmit={submit}>
          <Form.Input
            keyboardType="numeric"
            style={s.mb_3}
            name="pin"
            placeholder="Pin"
            label="Pin"
            mode="outlined"
          />
        </Form>
      </ModalSheet>
    </View>
  );
};
export default observer(PinModal);
