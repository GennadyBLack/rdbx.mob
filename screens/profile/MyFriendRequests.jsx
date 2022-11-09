import React, { useEffect } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "../../components/profile/ProfileImg";
import GridList from "../../components/list/GridList";
import s from "../../helpers/styleHelper";
import apis from "../../api/api";

const MyFriendRequests = ({ navigation }) => {
  const [users] = useStore("users");
  const [auth] = useStore("auth");

  const renderItem = (item) => (
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
      </View>
    </View>
  );

  const wrap_style = { paddingHorizontal: 10 };
  return (
    <ScrollView>
      {auth?.user?.user?.myFriendsRequest.map((item) => {
        return renderItem(item);
      })}
    </ScrollView>
  );
};

export default observer(MyFriendRequests);
