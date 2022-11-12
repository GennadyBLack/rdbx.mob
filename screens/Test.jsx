import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import s, { getStyle } from "../helpers/styleHelper";
import { getIcon } from "../helpers/iconHelper";
// import Cam from "../components/base/Cam";
const Test = () => {
  return (
    <ScrollView style={[s.flex]}>
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
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>add-to-photos{getIcon("add-to-photos")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>menu{getIcon("menu")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>image{getIcon("image")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>camerao{getIcon("camerao")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>meinfocirlcenu{getIcon("meinfocirlcenu")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>infocirlce{getIcon("infocirlce")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("md-exit-outline")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>login{getIcon("login")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>persons{getIcon("persons")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>edit{getIcon("edit")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("open-book")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>send{getIcon("send")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>rightcircle{getIcon("rightcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>leftcircle{getIcon("leftcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>upcircle{getIcon("upcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>downcircle{getIcon("downcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>rightcircleo{getIcon("rightcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>upcircleo{getIcon("upcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>leftcircleo{getIcon("leftcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>downcircleo{getIcon("downcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>retweet{getIcon("retweet")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>down{getIcon("down")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("up")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("right")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("left")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("minuscircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("pluscircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("closecircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("closecircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("checkcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>checkcircleo{getIcon("checkcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>close{getIcon("close")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>link{getIcon("link")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>home{getIcon("home")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>filter{getIcon("filter")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>user{getIcon("user")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>setting{getIcon("setting")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("notification")}</Text>
        <Text>{getIcon("notification")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>delete{getIcon("delete")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>heart{getIcon("heart")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>hearto{getIcon("hearto")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>search1{getIcon("search1")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>sync{getIcon("sync")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>message1{getIcon("message1")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>{getIcon("dots-three-vertical")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>fingerprint{getIcon("fingerprint")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>question{getIcon("question")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>question{getIcon("question")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>question{getIcon("question")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.h_3")}>
        <Text>question{getIcon("question")}</Text>
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
