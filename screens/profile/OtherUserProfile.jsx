import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import s, { getStyle } from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "../../components/profile/ProfileImg";
import { constants } from "../../helpers/styleHelper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { getIcon } from "../../helpers/iconHelper";
import MenuToggler from "../../components/menu/MenuToggler";

import { apiUrl } from "../../api";

const OtherUserProfile = ({ navigation }) => {
  const translateY = useSharedValue(-60);
  const [auth] = useStore("auth");

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <ScrollView {...getStyle("flex.p_2")}>
      <ImageBackground
        source={{
          uri: `${apiUrl}/files/${
            auth?.user?.user?.avatarBackground || "placeholder.png"
          }`,
        }}
        resizeMode="cover"
        style={[s.br, { overflow: "hidden" }]}
      >
        <View
          {...getStyle("hp_2.lpink_bg.a_i_center.br", {
            marginTop: 150,
            position: "relative",
          })}
        >
          <Animated.View style={[styles.profile_photo, rStyle]}>
            <ProfileImg
              width={120}
              path={auth?.user?.user?.avatar}
              styles={[{ borderWidth: 5, borderColor: constants.LIGHT_PINK }]}
            />
          </Animated.View>
          <View style={{ marginTop: 80 }}>
            <Text {...getStyle("fw_8", { fontSize: 15 })}>
              {auth?.user?.user?.username}
            </Text>
            <Text {...getStyle("fw_6.lgrey_c")}>{auth?.user?.user?.title}</Text>
            <Text {...getStyle("fw_6.lgrey_c")}>
              {auth?.user?.user?.description}
            </Text>
            <Text {...getStyle("fw_6.lgrey_c")}>
              Friends:{auth?.user?.user?.friends?.length}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center.h_5.br.p_2.mt_2")}>
        <Text>lpink_bg</Text>
      </View>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center.h_5.br.p_2.mt_2")}>
        <Text>lpink_bg</Text>
      </View>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center.h_5.br.p_2.mt_2")}>
        <Text>lpink_bg</Text>
      </View>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center.h_5.br.p_2.mt_2")}>
        <Text>lpink_bg</Text>
      </View>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center.h_5.br.p_2.mt_2")}>
        <Text>lpink_bg</Text>
      </View>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center.h_5.br.p_2.mt_2")}>
        <Text>lpink_bg</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile_photo: {
    position: "absolute",
  },
});

export default observer(OtherUserProfile);
