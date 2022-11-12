import React, { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "../../components/profile/ProfileImg";
import GridList from "../../components/list/GridList";
import s, { getStyle } from "../../helpers/styleHelper";
import apis from "../../api/api";
import { getIcon } from "../../helpers/iconHelper";
import MenuToggler from "../../components/menu/MenuToggler";

const FriendList = ({ navigation }) => {
  const [friends, setFriends] = useState([]);
  const [auth] = useStore("auth");

  const getAllUsers = async (search) => {
    const params = search
      ? {
          params: {
            filter: {
              username: { iLike: `%${search}%` },
            },
          },
        }
      : {};

    const data = await apis.me.getFriends(params);
    setFriends(data.data);
  };

  const menuItems = [
    {
      title: `Запросы дружбы ${auth?.user?.user?.friendsRequest?.length}`,
      onPress: () => {
        navigation.navigate("FriendRequests");
      },
    },
    {
      title: "Мои запросы",
      onPress: () => {
        navigation.navigate("MyFriendRequests");
      },
    },
  ];

  const renderItem = (item) => {
    return (
      // <Pressable
      //   key={item.id}
      //   onLongPress={navigation.navigate("OtherUserProfile", { id: item.id })}
      // >
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
        </View>
      </View>
      // </Pressable>
    );
  };
  const inputProps = {
    mode: "outlined",
    style: { height: 40, marginBottom: 20, borderRadius: 20 },
  };
  const wrap_style = { paddingHorizontal: 10 };
  return (
    <View>
      <GridList
        searchable
        wrap_style={wrap_style}
        data={friends}
        template={renderItem}
        onChange={getAllUsers}
        inputProps={inputProps}
      >
        <View {...getStyle("a_i_end", { position: "relative" })}>
          <MenuToggler
            items={menuItems}
            anchor={<Text>{getIcon("setting")}</Text>}
          />
        </View>
      </GridList>
    </View>
  );
};

export default observer(FriendList);
