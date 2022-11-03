import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import s, { getStyle, constants } from "../../helpers/styleHelper";
import ProfileImg from "../profile/ProfileImg";
import { getIcon } from "../../helpers/iconHelper";
const LeftMenuHeader = () => {
  const [auth] = useStore("auth");
  const user = auth?.user?.user;

  return (
    auth.logged && (
      <View style={s.p_3}>
        <View style={s.profile_wrapper}>
          <ProfileImg width={65} path={user?.avatar} />
          <View>
            <Text style={s.profile_name}>{user?.username}</Text>
            <Text style={{ color: constants.LIGHT }}> {user?.description}</Text>
          </View>
          <Text>{getIcon("setting")}</Text>
        </View>
      </View>
    )
  );
};

export default observer(LeftMenuHeader);
