import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import ErrorPopup from "./ErrorPopup";
import useStore from "../../hooks/useStore";
import { StyleSheet, View, Text, Vibration } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import storage from "../../helpers/storage";
import { Audio } from "expo-av";

export default observer(ErrorPopupList);
function ErrorPopupList() {
  const root = useStore();
  const [sound, setSound] = useState();
  const all = root.settings;

  const playSignal = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/mp3/oh-hi-mark.mp3")
    );
    await sound.playAsync();
  };

  const vibration = () => {
    all.vibration ? Vibration.vibrate() : null;
  };

  all.light ? useKeepAwake() : null;

  const errors = root?.errors;

  let remove = (index) => {
    root.removeError(index);
  };

  const mappedErrors = errors.length ? (
    <View style={styles.error_container} nativeID="error-id">
      {errors?.length > 0 ? (
        errors.map((item, index) => {
          vibration();
          playSignal();
          return (
            <ErrorPopup
              key={index}
              text={item.message}
              onDelete={() => remove(index)}
            />
          );
        })
      ) : (
        <Text></Text>
      )}
    </View>
  ) : (
    <Text></Text>
  );

  return <View>{mappedErrors}</View>;
}

const styles = StyleSheet.create({
  error_container: {
    flex: 1,
    width: 100,
    height: 100,
    position: "absolute",
    zIndex: 2,
    left: 10,
    bottom: 50,
  },
});
