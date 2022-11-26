import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from "react";

import { Controller } from "react-hook-form";

import { StyleSheet, View, Text, StatusBar, SafeAreaView } from "react-native";
export default function Picker({
  name,
  label,
  variant,
  control,
  rules,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const mappedItems = () => {
    return rest?.options?.map((item) => {
      return {
        label: rest?.title ? item[rest?.title] : item?.label,
        value: item.value,
      };
    });
  };
  return (
    <Controller
      render={({ field: { value, onChange }, fieldState }) => (
        <View>
          <DropDownPicker
            value={value}
            label={label || ""}
            open={open}
            setOpen={setOpen}
            setValue={(value) => onChange(value)}
            setItems={(value) => onChange(value)}
            items={mappedItems()}
            {...{
              ...fieldState,
              ...rest,
            }}
          />
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
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    // margin: 20,
    justifyContent: "center",
  },
});
