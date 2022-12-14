import {
  FontAwesome,
  Fontisto,
  Entypo,
  AntDesign,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

//https://icons.expo.fyi/ all icons here
export const getIcon = (name, color = "black", size = 24) => {
  switch (name) {
    case "image":
      return <Feather name="image" size={size} color={color} />;

    case "camerao":
      return <AntDesign name="camerao" size={size} color={color} />;
    case "add-to-photos":
      return <MaterialIcons name="add-to-photos" size={size} color={color} />;
    case "menu":
      return <Ionicons name="menu" size={size} color={color} />;
    case "infocirlce":
      return <AntDesign name="infocirlce" size={size} color={color} />;
    case "exit":
      return <Ionicons name="md-exit-outline" size={size} color={color} />;
    case "login":
      return <AntDesign name="login" size={size} color={color} />;
    case "persons":
      return <Fontisto name="persons" size={size} color={color} />;
    case "edit":
      return <FontAwesome name="edit" size={size} color={color} />;
    case "book":
      return <Entypo name="open-book" size={size} color={color} />;
    case "send":
      return <FontAwesome name="send" size={size} color={color} />;
    case "rightcircle":
      return <AntDesign name="rightcircle" size={size} color={color} />;
    case "leftcircle":
      return <AntDesign name="leftcircle" size={size} color={color} />;
    case "upcircle":
      return <AntDesign name="upcircle" size={size} color={color} />;
    case "downcircle":
      <AntDesign name="downcircle" size={size} color={color} />;
    case "rightcircleo":
      return <AntDesign name="rightcircleo" size={size} color={color} />;
    case "upcircleo":
      return <AntDesign name="upcircleo" size={size} color={color} />;
    case "leftcircleo":
      return <AntDesign name="leftcircleo" size={size} color={color} />;
    case "downcircleo":
      return <AntDesign name="downcircleo" size={size} color={color} />;
    case "retweet":
      return <AntDesign name="retweet" size={size} color={color} />;
    case "down":
      return <AntDesign name="down" size={size} color={color} />;
    case "up":
      return <AntDesign name="up" size={size} color={color} />;
    case "right":
      return <AntDesign name="right" size={size} color={color} />;
    case "left":
      return <AntDesign name="left" size={size} color={color} />;
    case "minuscircleo":
      return <AntDesign name="minuscircleo" size={size} color={color} />;
    case "pluscircleo":
      return <AntDesign name="pluscircleo" size={size} color={color} />;
    case "closecircleo":
      return <AntDesign name="closecircleo" size={size} color={color} />;
    case "closecircle":
      return <AntDesign name="closecircle" size={size} color={color} />;
    case "checkcircle":
      return <AntDesign name="checkcircle" size={size} color={color} />;
    case "checkcircleo":
      return <AntDesign name="checkcircleo" size={size} color={color} />;
    case "close":
      return <AntDesign name="close" size={size} color={color} />;
    case "link":
      return <AntDesign name="link" size={size} color={color} />;
    case "home":
      return <AntDesign name="home" size={size} color={color} />;
    case "filter":
      return <AntDesign name="filter" size={size} color={color} />;
    case "user":
      return <AntDesign name="user" size={size} color={color} />;
    case "setting":
      return <AntDesign name="setting" size={size} color={color} />;
    case "notification":
      return <AntDesign name="notification" size={size} color={color} />;
    case "delete":
      return <AntDesign name="delete" size={size} color={color} />;
    case "heart":
      return <AntDesign name="heart" size={size} color={color} />;
    case "hearto":
      return <AntDesign name="hearto" size={size} color={color} />;
    case "search1":
      return <AntDesign name="search1" size={size} color={color} />;
    case "sync":
      return <AntDesign name="sync" size={size} color={color} />;
    case "message1":
      return <AntDesign name="message1" size={size} color={color} />;
    case "dots-three-vertical":
      return <Entypo name="dots-three-vertical" size={size} color={color} />;
    case "dots-three-horizontal":
      return <Entypo name="dots-three-horizontal" size={size} color={color} />;
    case "fingerprint":
      return <Entypo name="fingerprint" size={size} color={color} />;
    case "forward":
      return <Entypo name="forward" size={size} color={color} />;
    case "list":
      return <Entypo name="list" size={size} color={color} />;
    case "message":
      return <Entypo name="message" size={size} color={color} />;
    case "question":
      return <AntDesign name="question" size={size} color={color} />;
    default:
      return <Entypo name="message" size={size} color={color} />;
  }
};
