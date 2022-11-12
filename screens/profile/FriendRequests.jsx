import React, { useEffect } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "../../components/profile/ProfileImg";
import s from "../../helpers/styleHelper";
import apis from "../../api/api";

const FriendRequests = ({ navigation }) => {
  const [auth] = useStore("auth");
  const renderItem = (item) => (
    <Pressable onPress={navigation.navigate("UserProfile", { id: item.id })}>
      <View
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
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={[s.snack, s.m_1]}
              onPress={() => {
                apis.me.createFriends({ user_id: item.id });
              }}
            >
              <Text>Принять</Text>
            </Pressable>
            <Pressable style={[s.snack, s.m_1]} onPress={() => {}}>
              <Text>Отклонить</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const wrap_style = { paddingHorizontal: 10 };
  return (
    <ScrollView>
      {auth?.user?.user?.friendsRequest.map((item) => {
        return renderItem(item);
      })}
    </ScrollView>
  );
};

export default observer(FriendRequests);
