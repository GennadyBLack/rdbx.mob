import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Select({
  name,
  label,
  variant,
  control,
  rules,
  ...rest
}) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const mappedItems = () => {
    return rest?.options?.map((item) => {
      return <Picker.Item label={item.label} value={item.value} />;
    });
  };
  return (
    <Controller
      style={{ height: 100 }}
      render={({ field: { value, onChange }, fieldState }) => (
        <View style={{ height: 100 }}>
          <Picker
            style={{ height: 100 }}
            error={fieldState?.error?.message}
            // value={value || ""}
            selectedValue={value ?? selectedLanguage}
            label={label || ""}
            onValueChange={(value) => {
              setSelectedLanguage(value);
              onChange(value);
            }}
            {...{
              ...fieldState,
              ...rest,
            }}
          >
            {mappedItems()}
          </Picker>
          <Text style={styles.error}>{fieldState?.error?.message}</Text>
        </View>
      )}
      rules={rules}
      control={control}
      name={name}
    />
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
