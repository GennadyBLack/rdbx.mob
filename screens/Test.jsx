import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import s, { getStyle } from "../helpers/styleHelper";
// import Cam from "../components/base/Cam";
const Test = () => {
  return (
    <ScrollView style={[s.flex]}>
      {/* <Cam /> */}
      <View {...getStyle("light_bg.j_c_center.a_i_center.h_5")}>
        <Text>light_bg</Text>
      </View>
      <View {...getStyle("lgrey_bg.j_c_center.a_i_center.h_3")}>
        <Text>lgrey_bg</Text>
      </View>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center.h_3")}>
        <Text>prymary_bg</Text>
      </View>
      <View {...getStyle("dark_bg.j_c_center.a_i_center.h_3")}>
        <Text>dark_bg</Text>
      </View>
      <View {...getStyle("grey_bg.j_c_center.a_i_center.h_3")}>
        <Text>grey_bg</Text>
      </View>
      <View {...getStyle("ruby_bg.j_c_center.a_i_center.h_3")}>
        <Text>ruby_bg</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>lpink_bg</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  color_item: {
    height: 100,
  },
});
export default Test;
