import { Button } from "react-native-paper";
import { DatePickerModal, DatePickerInput } from "react-native-paper-dates";
import * as React from "react";
import { View, Text } from "react-native";
import { Controller } from "react-hook-form";
import moment from "moment";

export default function DateInput({
  name,
  label,
  variant,
  control,
  rules,
  ...rest
}) {
  return (
    <Controller
      render={({ field: { value, onChange }, fieldState }) => (
        <View style={{ marginVertical: 10 }}>
          <DatePickerInput
            locale="Ru"
            error={fieldState?.error?.message}
            value={value || null}
            label={label || ""}
            onChange={(d) => {
              onChange(moment(d));
            }}
            inputMode="start"
            {...{
              ...fieldState,
              ...rest,
            }}
          />
          <Text style={{ color: "red" }}>{fieldState?.error?.message}</Text>
        </View>
      )}
      rules={rules}
      control={control}
      name={name}
    />
  );
}
