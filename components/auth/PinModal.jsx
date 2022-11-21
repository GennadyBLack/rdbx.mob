import React, { useState } from "react";
import { View, Text } from "react-native";
import storage from "../../helpers/storage";
import ModalSheet from "../base/ModalSheet";
import Form from "../validation/Form";
import s from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

const PinModal = ({ success, show }) => {
  const root = useStore();
  const [visible, setVisible] = useState(() => {
    return show;
  });

  const submit = async (data) => {
    try {
      const pin = await storage.get("pin");
      if (pin === data.pin) {
        console.log("success");
        await success();
      } else {
        root.setError({ message: "не верный пин код" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
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
  );
};
export default observer(PinModal);
