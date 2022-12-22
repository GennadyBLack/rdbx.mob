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
  const user = auth?.user;
  const navigation = useNavigation();
  return auth.logged ? (
    <Pressable
      onPress={() => {
        navigation.navigate("UserProfile");
        toggle();
      }}
    >
      <View style={s.p_1}>
        <View style={s.profile_wrapper}>
          <ProfileImg width={45} path={user?.avatar} />
          <View style={s.ml_4} testID="left_menu_header">
            <Text style={s.profile_name} numberOfLines={1} ellipsizeMode="tail">
              {`${user?.name} ${user?.last_name}`}
            </Text>
            <Text style={[{ color: constants.LIGHT }]}>Перейти в профиль</Text>
          </View>
        </View>
      </View>
    </Pressable>
  ) : (
    <Text></Text>
  );
};

export default observer(LeftMenuHeader);
