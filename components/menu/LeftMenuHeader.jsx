import React from "react";
import { View, Text, Pressable } from "react-native";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import s, { getStyle, constants } from "../../helpers/styleHelper";
import ProfileImg from "../profile/ProfileImg";
import { getIcon } from "../../helpers/iconHelper";
import { useNavigation } from "@react-navigation/native";
const LeftMenuHeader = ({ toggle }) => {
  const [auth] = useStore("auth");
  const user = auth?.user?.user;

  const navigation = useNavigation();

  return (
    auth.logged && (
      <Pressable
        onPress={() => {
          navigation.navigate("OtherUserProfile", { id: user.id });
          toggle();
        }}
      >
        <View style={s.p_3}>
          <View style={s.profile_wrapper}>
            <ProfileImg width={45} path={user?.avatar} />
            <View style={s.ml_4}>
              <Text
                style={s.profile_name}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {user?.username}
              </Text>
              <Text style={[{ color: constants.LIGHT }]}>
                Перейти в профиль
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    )
  );
};

export default observer(LeftMenuHeader);
