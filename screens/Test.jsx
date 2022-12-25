import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import s, { getStyle } from "../helpers/styleHelper";
import { getIcon } from "../helpers/iconHelper";
import GameFillword from "./game/GameFillword";
// import Cam from "../components/base/Cam";
const Test = () => {
  return (
    <ScrollView style={[]}>
      <GameFillword />
      <View {...getStyle("lpink_bg.j_c_center.a_i_center")}>
        <Text>persons{getIcon("persons")}</Text>
      </View>
      <View {...getStyle("light_bg.j_c_center.a_i_center")}>
        <Text>light_bg</Text>
      </View>
      <View {...getStyle("lgrey_bg.j_c_center.a_i_center")}>
        <Text>lgrey_bg</Text>
      </View>
      <View {...getStyle("prymary_bg.j_c_center.a_i_center")}>
        <Text>prymary_bg</Text>
      </View>
      <View {...getStyle("dark_bg.j_c_center.a_i_center")}>
        <Text>dark_bg</Text>
      </View>
      <View {...getStyle("grey_bg.j_c_center.a_i_center")}>
        <Text>grey_bg</Text>
      </View>
      <View {...getStyle("ruby_bg.j_c_center.a_i_center")}>
        <Text>ruby_bg</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center")}>
        <Text>lpink_bg</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>
          <Text>lpink_bg</Text>
          <Text>add-to-photos{getIcon("add-to-photos")}</Text>
        </Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>menu{getIcon("menu")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>image{getIcon("image")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>camerao{getIcon("camerao")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>meinfocirlcenu{getIcon("meinfocirlcenu")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>infocirlce{getIcon("infocirlce")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("md-exit-outline")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>login{getIcon("login")}</Text>
      </View>

      <View {...getStyle("prymary_bg.j_c_center.a_i_center.")}>
        <Text>edit{getIcon("edit")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("open-book")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>send{getIcon("send")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>rightcircle{getIcon("rightcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>leftcircle{getIcon("leftcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>upcircle{getIcon("upcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>downcircle{getIcon("downcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>rightcircleo{getIcon("rightcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>upcircleo{getIcon("upcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>leftcircleo{getIcon("leftcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>downcircleo{getIcon("downcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>retweet{getIcon("retweet")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>down{getIcon("down")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("up")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("right")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("left")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("minuscircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("pluscircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("closecircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("closecircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("checkcircle")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>checkcircleo{getIcon("checkcircleo")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>close{getIcon("close")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>link{getIcon("link")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>home{getIcon("home")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>filter{getIcon("filter")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>user{getIcon("user")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>setting{getIcon("setting")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("notification")}</Text>
        <Text>{getIcon("notification")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>delete{getIcon("delete")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>heart{getIcon("heart")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>hearto{getIcon("hearto")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>search1{getIcon("search1")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>sync{getIcon("sync")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>message1{getIcon("message1")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>{getIcon("dots-three-vertical")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>fingerprint {getIcon("fingerprint")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>question {getIcon("question")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>question {getIcon("question")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>question {getIcon("question")}</Text>
      </View>
      <View {...getStyle("lpink_bg.j_c_center.a_i_center.")}>
        <Text>question {getIcon("question")}</Text>
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
