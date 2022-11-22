import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import ErrorPopup from "./ErrorPopup";
import useStore from "../../hooks/useStore";
import { StyleSheet, View, Text, Vibration } from "react-native";
import { useKeepAwake } from "expo-keep-awake";

import { Audio } from "expo-av";

const ErrorPopupList = (props) => {
  const root = useStore();
  const [sound, setSound] = useState();

  const all = root.settings;

  const playSignal = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/mp3/oh-hi-mark.mp3")
    );
    all?.single ? await sound.playAsync() : null;
  };

  const vibration = () => {
    all?.vibration ? Vibration.vibrate() : null;
  };

  all?.light ? useKeepAwake() : null;

  const errors = root?.getErrors;

  let remove = (index) => {
    root.removeError(index);
  };

  return (
    <View nativeID="error-id" style={styles.error_container}>
      {errors.length ? (
        <View style={styles.error_container}>
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error_container: {
    flex: 1,
    width: 10,
    height: 10,
    position: "absolute",
    zIndex: 2,
    left: 10,
    top: 40,
    zIndex: 500000,
  },
});

export default observer(ErrorPopupList);
