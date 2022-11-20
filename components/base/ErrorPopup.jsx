import * as React from "react";
import { View, Text } from "react-native";
import { Snackbar } from "react-native-paper";

const ErrorPopup = ({ text, onDelete }) => {
  const [visible, setVisible] = React.useState(true);

  const onDismissSnackBar = () => {
    setVisible(false), onDelete();
  };

  return (
    <View
      style={{ height: 0, width: 350, flex: 1, position: "absolute" }}
      nativeID="errors"
    >
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Закрыть",
          onPress: () => {},
        }}
      >
        <Text>{text}</Text>
      </Snackbar>
    </View>
  );
};

export default ErrorPopup;
