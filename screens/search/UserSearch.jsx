import React, { useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

import GridList from "../../components/list/GridList";

const UserSearch = ({ navigation }) => {
  const [users] = useStore("users");

  const getAllUsers = async (search) => {
    const params = search
      ? { params: { filter: { username: { iLike: `%${search}%` } } } }
      : {};
    await users.getAll(params);
  };
  useEffect(() => {
    console.log("users page");
    getAllUsers();
  }, []);

  const renderItem = (item) => (
    <View style={{ backgroundColor: "white", height: 80, borderRadius: 10 }}>
      <Text>{item?.username}</Text>
    </View>
  );
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
    ></GridList>
  );
};

export default observer(UserSearch);
