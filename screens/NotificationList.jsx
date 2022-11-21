import React from "react";
import ScrollList from "../components/list/ScrollList";
import NotificationListItem from "../components/notification/NotificationListItem";
import NotificationHeader from "../components/notification/NotificationListHeader";

const NotificationList = () => {
  return (
    <ScrollList
      ListHeaderComponent={<NotificationHeader />}
      method="cabinet.get_multiple_notification_by_filter"
      style={{ flex: 1 }}
      Component={NotificationListItem}
    />
  );
};

export default NotificationList;
