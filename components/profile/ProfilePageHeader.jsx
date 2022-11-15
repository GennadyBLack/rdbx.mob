import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import placeholder from "../../assets/placeholder.jpg";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "./ProfileImg";
import { constants } from "../../helpers/styleHelper";
import ModalSheet from "../base/ModalSheet";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { getIcon } from "../../helpers/iconHelper";
import MenuToggler from "../menu/MenuToggler";

import Spiner from "../base/Spiner";
import { apiUrl } from "../../api";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProfilePageHeader = () => {
  const navigation = useNavigation();
  const translateY = useSharedValue(-60);
  const [auth] = useStore("auth");
  const route = useRoute();
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const menuItems = [
    {
      title: "Редактировать Фото профиля",
      onPress: () => {
        navigation.navigate("EditProfileImage");
      },
      current: true,
    },
    {
      title: "Редактировать профиль",
      onPress: () => {
        navigation.navigate("EditProfile");
      },
      current: true,
    },
    {
      title: "Настройки",
      onPress: () => {
        navigation.navigate("ProfileSettings");
      },
      current: true,
    },
  ];

  const [active, toggle] = ModalSheet.useModal();

  return (
    <View {...getStyle("flex.p_2.primary_bg")}>
      <View>
        <ImageBackground
          // source={"../../assets/placeholder.jpg"}
          source={require("../../assets/placeholder.jpg")}
          resizeMode="cover"
          style={[s.br, { overflow: "hidden" }]}
        >
          <View
            {...getStyle("a_i_end.m_2", {
              position: "relative",
            })}
          >
            <MenuToggler
              customClass={s.profile_anchor}
              items={menuItems}
              anchor={<Text>{getIcon("setting")}</Text>}
            />
          </View>
          <View
            {...getStyle("hp_2.lpink_bg.a_i_center.br", {
              marginTop: 150,
              position: "relative",
            })}
          >
            <Animated.View style={[styles.profile_photo, rStyle]}>
              <ProfileImg
                width={120}
                path={auth?.user?.currentUser?.avatar}
                styles={[{ borderWidth: 5, borderColor: constants.LIGHT_PINK }]}
              />
            </Animated.View>
            <View style={{ marginTop: 80 }}>
              <Text {...getStyle("fw_8", { fontSize: 15 })}>
                {`${auth?.user?.name} ${auth?.user?.last_name}`}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Spiner loading={auth.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  profile_photo: {
    position: "absolute",
  },
});

export default observer(ProfilePageHeader);
