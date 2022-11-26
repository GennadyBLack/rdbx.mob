import React, { useState } from "react";
import { Controller } from "react-hook-form";
import {
  Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from "react-native";
import DropDown from "react-native-paper-dropdown";
export default function Drop({
  name,
  label,
  variant,
  control,
  rules,
  ...rest
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [nightMode, setNightmode] = useState(false);

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
        <Provider>
          <ThemeProvider>
            <StatusBar
              backgroundColor={
                nightMode
                  ? DarkTheme.colors.surface
                  : DefaultTheme.colors.primary
              }
              barStyle={"light-content"}
            />

            <Surface style={styles.containerStyle}>
              <SafeAreaView style={styles.safeContainerStyle}>
                <DropDown
                  dropDownStyle={{
                    width: 400,
                    backgroundColor: "white",
                    borderColor: "white",
                    shadowColor: "white",
                  }}
                  error={fieldState?.error?.message}
                  value={value || ""}
                  label={label || ""}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  setValue={(value) => onChange(value)}
                  list={mappedItems()}
                  {...{
                    ...fieldState,
                    ...rest,
                  }}
                />
                <Text style={styles.error}>{fieldState?.error?.message}</Text>
              </SafeAreaView>
            </Surface>
          </ThemeProvider>
        </Provider>
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
