import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import s, { getStyle } from "../../helpers/styleHelper";
import { getIcon } from "../../helpers/iconHelper";
import LeftMenuHeader from "../menu/LeftMenuHeader";

import {
  View,
  Modal,
  StatusBar,
  Pressable,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import useStore from "../../hooks/useStore";
import { useNavigation } from "@react-navigation/native";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const BaseTopMenu = () => {
  const [menu] = useStore("menu");
  const [auth] = useStore("auth");
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <StatusBar />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>
          <Pressable
            onPress={() => {
              setVisible(!visible);
            }}
          >
            <Text>{getIcon("menu", "black", 40)}</Text>
          </Pressable>
        </Text>
        <Text
          style={{ fontSize: 20, fontWeight: "600", paddingLeft: 20 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {`${auth?.user?.name ?? ""} ${auth?.user?.last_name ?? ""}`}
        </Text>
      </View>
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <View
          style={[s.prymary_bg, s.flex, { justifyContent: "space-between" }]}
        >
          <View>
            {auth?.logged ? (
              <LeftMenuHeader toggle={() => setVisible(!visible)} />
            ) : (
              <Text></Text>
            )}
            {menu?.leftRoutes.map((item, idx) => {
              return (
                <TouchableHighlight
                  key={idx}
                  style={{
                    padding: 10,
                  }}
                  onPress={() => {
                    navigation.navigate(item?.name);
                    setVisible(!visible);
                  }}
                >
                  <View {...getStyle("a_i_center", { flexDirection: "row" })}>
                    <Text> {getIcon(item.icon)}</Text>
                    <Text style={styles.menu_link}>{item?.title}</Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </View>
          {auth.logged ? (
            <TouchableHighlight
              onPress={() => {
                auth.logout();
                setVisible(!visible);
              }}
              style={{
                padding: 10,
              }}
            >
              <Text style={styles.menu_link}>{getIcon("exit")}</Text>
            </TouchableHighlight>
          ) : (
            <Text></Text>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  left_menu_wrapper: {
    flex: 1,

    height: SCREEN_HEIGHT,
    backgroundColor: "#eee",
    position: "absolute",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 10,
  },
  back: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
  menu_link: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    padding: 10,
    fontWeight: "600",
  },
});

export default observer(BaseTopMenu);
