import React, { useState, useEffect } from "react";
import Pick from "../fields/Pick";

import { Controller } from "react-hook-form";

import { StyleSheet, View, Text } from "react-native";

export default function Picker({
  name,
  label,
  variant,
  control,
  rules,
  value,
  ...rest
}) {
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
          <Pick
            value={value}
            label={label || ""}
            onChange={(value) => onChange(value)}
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
