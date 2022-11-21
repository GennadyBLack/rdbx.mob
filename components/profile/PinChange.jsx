import React from "react";
import { View } from "react-native";
import storage from "../../helpers/storage";
import Form from "../validation/Form";
import s from "../../helpers/styleHelper";

const PinChange = () => {
  const change_pin = async (data) => {
    storage.set("pin", data.pin);
  };

  return (
    <View style={{ flex: 1 }}>
      <Form onSubmit={change_pin}>
        <Form.Input
          keyboardType="numeric"
          style={s.mb_3}
          name="pin"
          placeholder="Pin"
          label="Pin"
          mode="outlined"
        />
      </Form>
    </View>
  );
};

export default PinChange;
