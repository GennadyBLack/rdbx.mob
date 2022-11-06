import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import isFunction from "../helpers/utils";
import * as ImagePicker from "expo-image-picker";
import useStore from "./useStore";

export default function useUploadImage(value = null, onChange) {
  const [image, setImage] = useState(() => (value ? value : null));
  const [tools] = useStore("tools");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    console.log(value, "valuevalue==");
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    await tools.uploadImage(result);

    if (!result.cancelled) {
      if (typeof onChange === "function") {
        isFunction(tools?.imageName);
      }

      setImage(result.uri);
    }
  };

  return [image, pickImage];
}
