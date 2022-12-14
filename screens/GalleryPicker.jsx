import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import useStore from "../hooks/useStore";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { getIcon } from "../helpers/iconHelper";

export default function GalleryPicker({
  value = null,
  error,
  onChange,
  title,
  customClass,
}) {
  const [image, setImage] = useState(() => (value ? value : null));
  const [tools] = useStore("tools");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        const permissionResult =
          await ImagePicker.requestCameraPermissionsAsync();
        const mediaLibraryPermission =
          await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need media library permissions to make this work!");
        }
        if (permissionResult.granted == false) {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
        if (mediaLibraryPermission.granted == false) {
          alert("Sorry, we need media permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    await onResult(result);
  };

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 1,
      exif: false,
      allowsEditing: true,
    });
    await onResult(result);
  };
  async function onResult(result) {
    if (!result.cancelled) {
      let photo = result.uri;
      await MediaLibrary.saveToLibraryAsync(photo);
      if (Platform.OS === "android" || "ios") {
        photo = "data:image/jpg;base64," + result.base64;
      }

      setImage(photo);
      if (typeof onChange === "function") {
        onChange(photo);
        return;
      }
      await tools.setPreLoadImage(photo);
    }
  }
  return (
    <View style={[customClass]}>
      <Pressable title={title ? title : "upload image"} onPress={pickImage}>
        <Text>{getIcon("image")}</Text>
      </Pressable>
      <Pressable title={title ? title : "open camera"} onPress={openCamera}>
        <Text>{getIcon("camerao")}</Text>
      </Pressable>
    </View>
  );
}
