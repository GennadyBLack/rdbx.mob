import { View, Text } from "react-native";

const logHelper = (...rest) => {
  const data = JSON.stringify(rest);
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

export default logHelper;
