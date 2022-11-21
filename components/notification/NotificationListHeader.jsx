import React from "react";
import { View, Text, Pressable } from "react-native";
import s from "../../helpers/styleHelper";
import api from "../../api";

const NotificationHeader = (reset) => {
  const readAllNotifications = async () => {
    await api.cabinet.get_multiple_notification_by_filter({ read: true });
  };
  return (
    <View>
      <Pressable
        onPress={() => {
          readAllNotifications();
        }}
        style={[s.button]}
      >
        <Text>Прочитать Все</Text>
      </Pressable>
    </View>
  );
};

export default NotificationHeader;
