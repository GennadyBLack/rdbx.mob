import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import ProfilePost from "../../components/profile/ProfilePost";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "../../components/profile/ProfileImg";
import { constants } from "../../helpers/styleHelper";
import ModalSheet from "../../components/base/ModalSheet";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { getIcon } from "../../helpers/iconHelper";
import MenuToggler from "../../components/menu/MenuToggler";
import FeedCreateForm from "./FeedCreateForm";

import { apiUrl } from "../../api";
import { useRoute } from "@react-navigation/native";
import GridList from "../../components/list/GridList";

const OtherUserProfile = ({ navigation }) => {
  const translateY = useSharedValue(-60);
  const [auth] = useStore("auth");
  const [users] = useStore("users");
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
      title: "Редактировать обложку",
      onPress: () => {
        navigation.navigate("EditProfileBackground");
      },
      current: true,
    },

    {
      title: "Добавить в друзья",
      onPress: () => {
        navigation.navigate("EditProfileBackground");
      },
      current: false,
    },
    {
      title: "Пожаловаться",
      onPress: () => {
        navigation.navigate("EditProfileBackground");
      },
      current: false,
    },
  ];
  const currentUser = route?.params?.id === auth?.user?.user?.id;
  const getMenuItem = () => {
    return menuItems.filter((item) => {
      if (currentUser) {
        return item?.current;
      } else {
        return !item?.current;
      }
    });
  };

  const menus = getMenuItem();
  useEffect(() => {
    users.get(route.params.id, { params: { include: "friends.feeds" } });
  }, [route?.params.id]);

  const [active, toggle] = ModalSheet.useModal();
  return (
    <ScrollView {...getStyle("flex.p_2.primary_bg")}>
      <ImageBackground
        source={{
          uri: `${apiUrl}/files/${
            users?.currentUser?.avatarBackground || "placeholder.png"
          }`,
        }}
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
            items={menus}
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
              path={users?.currentUser?.avatar}
              styles={[{ borderWidth: 5, borderColor: constants.LIGHT_PINK }]}
            />
          </Animated.View>
          <View style={{ marginTop: 80 }}>
            <Text {...getStyle("fw_8", { fontSize: 15 })}>
              {users?.currentUser?.username}
            </Text>
            <Text {...getStyle("fw_6.lgrey_c")}>
              {users?.currentUser?.title}
            </Text>
            <Text {...getStyle("fw_6.lgrey_c")}>
              {users?.currentUser?.description}
            </Text>
            <Text {...getStyle("fw_6.lgrey_c")}>
              Friends:{users?.currentUser?.friends?.length}
            </Text>
          </View>
        </View>
      </ImageBackground>
      {currentUser ? (
        <View
          {...getStyle("prymary_bg.a_i_center.br.p_2.mt_2", {
            flexDirection: "row",
            justifyContent: "center",
          })}
        >
          <Pressable
            onPress={() => {
              toggle();
            }}
          >
            <Text>Добавить запись {getIcon("add-to-photos")}</Text>
          </Pressable>

          <ModalSheet
            visible={active}
            toggle={() => {
              toggle();
            }}
          >
            <FeedCreateForm />
          </ModalSheet>
        </View>
      ) : (
        <Text></Text>
      )}
      <GridList
        data={users?.currentUser?.feeds}
        Component={ProfilePost}
        onChange={() => {
          console.log("hi i was changed");
        }}
      ></GridList>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile_photo: {
    position: "absolute",
  },
});

export default observer(OtherUserProfile);
