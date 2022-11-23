import { Button } from "react-native-paper";
import { DatePickerModal, DatePickerInput } from "react-native-paper-dates";
import * as React from "react";
import { View, Text } from "react-native";
import { Controller } from "react-hook-form";

export default function DateInput({
  name,
  label,
  variant,
  control,
  rules,
  ...rest
}) {
  const [inputDate, setInputDate] = React.useState(undefined);

  return (
    <Controller
      render={({ field: { value, onChange }, fieldState }) => (
        <View style={{ marginVertical: 10 }}>
          <DatePickerInput
            locale="ru"
            error={fieldState?.error?.message}
            value={value || ""}
            label={label || ""}
            onChange={(d) => {
              onChange(d);
              setInputDate(d);
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
