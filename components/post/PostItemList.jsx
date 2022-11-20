import React, { useState } from "react";
import { View, Text, Pressable, Image, ScrollView, Share } from "react-native";
import s, { constants } from "../../helpers/styleHelper";
import ModalSheet from "../base/ModalSheet";

const PostItemList = ({ item, included }) => {
  const placeholder = require("../../assets/placeholder.jpg");
  const [visible, setVisible] = useState(false);

  const qr = item?.meta?.qr_code;
  const image =
    item?.include["gallery_item"][
      item?.activity?.relationships?.general_image?.id
    ]?.attributes?.link;
  const item_image =
    item?.include["gallery_item"][item?.activity?.relationships?.item_image?.id]
      ?.attributes?.link;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Приглашаю пойти на мероприятие ${item?.ticket_type?.attributes?.title}`,
        url: item?.meta?.invoice,
        title: "Go",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <Pressable
        onPress={() => {
          setVisible(!visible);
        }}
      >
        <View
          style={[
            s.ruby_bg,
            {
              padding: 10,
              margin: 7,
              height: 80,
              borderRadius: 10,
              justifyContent: "space-around",
              flexDirection: "row",
              backgroundColor: constants.GREEN,

              alignItems: "center",
            },
          ]}
        >
          <View style={{ minWidth: 40 }}>
            <Text>№{item?.id}</Text>
          </View>
          <View style={{ minWidth: 40 }}>
            <Text>{item?.ticket_type?.attributes?.title ?? "-"}</Text>
          </View>
          <View style={{ flexDirection: "column", minWidth: 40 }}>
            <Text>{item?.date?.attributes?.start_date ?? "-"}</Text>
            <Text>{item?.date?.attributes?.start_time ?? " "}</Text>
          </View>
        </View>
      </Pressable>
      <ModalSheet visible={visible} toggle={() => setVisible(!visible)}>
        <ScrollView>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 350 }}
            key={new Date()}
          />
          <Text>{item?.ticket_type?.attributes?.title ?? "-"}</Text>

          <Text>Описание:{item?.activity?.attributes?.description ?? "-"}</Text>
          <Text>
            Место проведения:{item?.activity?.attributes?.address ?? "-"}
          </Text>
          <Text>{item?.activity?.attributes?.address_description ?? "-"}</Text>
          <Text>
            Контактная почта:{item?.activity?.attributes?.contact_email ?? "-"}
          </Text>
          <Text>
            Контактный телефон:
            {item?.activity?.attributes?.contact_phone ?? "-"}
          </Text>
          <Text>Всего билетов:{item?.activity?.meta?.ticket_count ?? "-"}</Text>
          <Pressable onPress={() => onShare()} style={[s.button]}>
            <Text>Пригласить</Text>
          </Pressable>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: qr }}
              style={{ width: "100%", height: 250, marginBottom: 20 }}
            />
          </View>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
          <Text>Пригласить</Text>
        </ScrollView>
      </ModalSheet>
    </View>
  );
};

export default PostItemList;
