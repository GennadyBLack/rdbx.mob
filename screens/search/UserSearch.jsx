import React, { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "../../components/profile/ProfileImg";
import GridList from "../../components/list/GridList";
import s from "../../helpers/styleHelper";
import apis from "../../api/api";
import ModalSheet from "../../components/base/ModalSheet";
import { TextInput } from "react-native-paper";
const UserSearch = ({ navigation }) => {
  const [users] = useStore("users");
  const [auth] = useStore("auth");

  const friendsIds = auth.user.user.friends.map((item) => {
    return item.id;
  });

  const getAllUsers = async (search) => {
    const params = search
      ? { params: { filter: { username: { iLike: `%${search}%` } } } }
      : {};
    await users.getAll(params, true);
  };

  const [visible, setVisible] = useState(false);
  const [userId, setUserId] = useState(false);
  const [text, setText] = useState("");

  const renderItem = (item) => {
    return (
      <View
        key={item?.id}
        style={[
          s.mb_1,
          {
            backgroundColor: "white",
            height: 80,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          },
        ]}
      >
        <View style={{ marginRight: 10 }}>
          <ProfileImg path={item?.avatar} width={50} />
        </View>
        <View>
          <Text>{item?.username}</Text>
          {item.id !== auth.user.user.id && !friendsIds.includes(item.id) && (
            <Pressable
              style={s.snack}
              onPress={() => {
                setVisible(true);
                setUserId(item?.id);
              }}
            >
              <Text>Добавить</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  const inputProps = {
    mode: "outlined",
    style: { height: 40, marginBottom: 20, borderRadius: 20 },
  };
  const wrap_style = { paddingHorizontal: 10 };
  return (
    <GridList
      wrap_style={wrap_style}
      data={users?.users}
      template={renderItem}
      onChange={getAllUsers}
      inputProps={inputProps}
    >
      <ModalSheet
        visible={visible}
        toggle={() => {
          setVisible(!visible);
        }}
      >
        <View>
          <TextInput
            mode="outlined"
            label="Сопроводительный текст"
            value={text}
            onChangeText={(value) => {
              setText(value);
            }}
          />
          <Pressable
            style={[s.button, s.m_2]}
            onPress={async () => {
              await apis.me.requestFriend({ user_id: userId, text: text });
              setVisible(false);
            }}
          >
            <Text>Добавить в друзья</Text>
          </Pressable>
        </View>
      </ModalSheet>
    </GridList>
  );
};

export default observer(UserSearch);
