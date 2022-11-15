import React from "react";
import { Text, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
const ProfileSettings = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>Hi in settings page</Text>
    </ScrollView>
  );
};

export default observer(ProfileSettings);
