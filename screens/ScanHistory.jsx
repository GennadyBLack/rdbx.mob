import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import s from "../helpers/styleHelper";
import { Badge } from "react-native-paper";
import { getScanHistory } from "../helpers/storage";
const ScanHistory = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    const data = await getScanHistory();
    setList(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView>
      {list?.map((item) => {
        return (
          <View
            style={[
              {
                overflow: "scroll",
                height: 80,
                borderRadius: 10,
                backgroundColor: `${item?.success ? "green" : "white"}`,
                padding: 20,
                margin: 10,
              },
            ]}
          >
            <Text>
              <Badge
                style={{
                  backgroundColor: `${item?.success ? "red" : "green"}`,
                }}
              >
                {item?.success ? "успех" : "провал"}
              </Badge>
            </Text>
            <Text>Код:{item?.code?.code}</Text>
            <Text> {item?.date}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};
export default ScanHistory;
