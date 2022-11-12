import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import useStore from "../../hooks/useStore";
import GalleryPicker from "../GalleryPicker";
import { useIsFocused } from "@react-navigation/native";
import s from "../../helpers/styleHelper";
import { getIcon } from "../../helpers/iconHelper";

export default function FeedCreate({ navigation }) {
  let [feed, tools] = useStore("feed", "tools");
  let [image, setImage] = useState(null);
  let [form, setForm] = useState({ title: "", desc: "" });

  const isFocused = useIsFocused();
  let setText = (e, field) => {
    setForm({ ...form, [field]: e });
  };

  let create = async () => {
    if (image || tools.preLoadImage) {
      try {
        await tools.uploadImage({ uri: image || tools.preLoadImage });
        if (tools.preLoadImage) {
          await tools.setPreLoadImage(null);
        }
      } catch (e) {
        console.error(e);
      }
    }
    await feed.create(form);
    // feed.getAll();
    // navigation.replace("feed");
  };

  const onPhotoChosen = (img) => {
    setImage(img);
  };
  useEffect(() => {
    if (isFocused) {
      console.log(
        tools?.preLoadImage?.slice(0, 100) || "not ready",
        "Preloadada"
      );
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <Text>что нового ? </Text>
      <TextInput
        label="Title"
        value={form?.title}
        onChangeText={(text) => setText(text, "title")}
        mode="outlined"
      />
      <TextInput
        label="Description"
        value={form?.desc}
        onChangeText={(text) => setText(text, "desc")}
        mode="outlined"
        multiline
      />
      {image && isFocused && (
        <Image
          source={{ uri: image, cache: "reload" }}
          style={{ width: "100%", height: 350 }}
          key={new Date()}
        />
      )}
      <View
        style={[
          { flexDirection: "row", height: 50, justifyContent: "right" },
          s.prymary_bg,
          s.a_i_center,
          s.m_1,
          s.br_1,
          s.p_2,
        ]}
      >
        <GalleryPicker
          onChange={(img) => onPhotoChosen(img)}
          customClass={[
            { flexDirection: "row", borderWidth: 1, borderColor: "black" },
            s.mr_3,
            s.p_1,
            s.br_1,
          ]}
        />
        <Pressable onPress={() => navigation.navigate("feed")} style={s.m_1}>
          <Text>{getIcon("close")}</Text>
        </Pressable>
        <Pressable onPress={() => create()} style={s.m_1}>
          <Text>{getIcon("send")}</Text>
        </Pressable>
      </View>
    </View>
  );
}
