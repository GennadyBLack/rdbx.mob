import React, { useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import ProfileImg from "../../components/profile/ProfileImg";
import GridList from "../../components/list/GridList";
import s from "../../helpers/styleHelper";
import apis from "../../api/api";
const FriendList = ({ navigation }) => {
  const [users] = useStore("users");
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
    await apis.me.getFriends(params);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
  const inputProps = {
    mode: "outlined",
    style: { height: 40, marginBottom: 20, borderRadius: 20 },
  };
  const wrap_style = { paddingHorizontal: 10 };
  return (
    <View>
      <GridList
        wrap_style={wrap_style}
        data={users?.users}
        template={renderItem}
        onChange={getAllUsers}
        inputProps={inputProps}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("FriendRequests");
            }}
            style={s.snack}
          >
            <Text>
              Запросы дружбы {auth?.user?.user?.friendsRequest?.length}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("MyFriendRequests");
            }}
            style={s.snack}
          >
            <Text>Мои запросы</Text>
          </Pressable>
        </View>
      </GridList>
    </View>
  );
};

export default observer(FriendList);
