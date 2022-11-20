import react from "react";
import { View } from "react-native";
import ScrollList from "../components/list/ScrollList";
import NotificationListItem from "../components/notification/NotificationListItem";

const NotificationList = () => {
  return (
    <ScrollList
      method="cabinet.get_multiple_notification_by_filter"
      style={{ flex: 1 }}
      Component={NotificationListItem}
    />
  );
};

export default NotificationList;
