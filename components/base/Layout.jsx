import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import ModalWrapper from "./ModalWrapper";
import ErrorPopupList from "./ErrorPopupList";

const Layout = ({ children, layout = "public" }) => {
  switch (layout) {
    case "auth":
      return (
        <View style={{ flex: 1 }}>
          {children}
          <ErrorPopupList />
        </View>
      );
      break;
    case "public":
      return (
        <View style={{ flex: 1 }}>
          <ModalWrapper>
            {children}
            <ErrorPopupList />
          </ModalWrapper>
        </View>
      );
      break;
    case "empty":
      return (
        <View style={{ flex: 1 }}>
          {children}
          <ErrorPopupList />
        </View>
      );
      break;
    default:
      return (
        <View style={{ flex: 1 }}>
          {children}
          <ErrorPopupList />
        </View>
      );
  }
};

export default observer(Layout);
