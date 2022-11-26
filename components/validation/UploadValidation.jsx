import React, { useState, useEffect } from "react";
import { Image, View, Platform, Text, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import useStore from "../../hooks/useStore";
import { apiUrl } from "../../api";
import { getStyle } from "../../helpers/styleHelper";
// import useUploadImage from "../../hooks/useUploadImage";

export default function UploadValidation({
  value = null,
  error,
  onChange,
  title,
}) {
  // const [image, pickImage] = useUploadImage(value);

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
        onChange(tools?.imageName);
      }
      setImage(tools?.imageName);
    }
  };

  return (
    <View>
      <Pressable {...getStyle("button")} onPress={pickImage}>
        <Text>{title ? title : "upload image"}</Text>
      </Pressable>

      {image ? (
        <View>
          {image ? (
            <Image
              style={[{ height: 500, width: "100%", borderRadius: 10 }]}
              source={{
                uri: `${apiUrl}/files/${image || "placeholder.png"}`,
              }}
            />
          ) : null}
        </View>
      ) : null}
    </View>
  );
}
