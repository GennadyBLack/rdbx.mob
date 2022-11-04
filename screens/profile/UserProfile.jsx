import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import s, { getStyle } from "../../helpers/styleHelper";
const Test = () => {
  return (
    <ScrollView>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>lpink_bg</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default Test;
