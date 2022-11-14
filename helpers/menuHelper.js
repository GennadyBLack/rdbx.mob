import Login from "./../screens/auth/Login";
import Register from "./../screens/auth/Register";
import Public from "../screens/public/Public";
import Test from "../screens/Test";
import { getIcon } from "../helpers/iconHelper";
import RegisterSetPassword from "../screens/auth/RegisterSetPassword";

export const availableLinks = [
  {
    name: "Login",
    component: Login,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("login", color, size),
    },
    leftMenu: true,
    layout: "public",
    icon: "login",
    title: "Логин",
  },

  {
    name: "RegisterSetPassword",
    component: RegisterSetPassword,
    auth: true,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "auth",
    icon: "login",
    title: "Регистрация",
  },
  {
    name: "Register",
    component: Register,
    auth: true,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "auth",
    icon: "login",
    title: "Регистрация",
  },
  {
    name: "Public",
    component: Public,
    auth: false,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout: "public",
    icon: "home",
    title: "Главная страница",
  },
  {
    name: "Test",
    component: Test,
    auth: false,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout: "public",
    icon: "infocirlce",
    title: "Тестовый стенд",
  },
];

//LINKING CONFIG
export const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Login: "login",
      Register: "register",
      Public: "/",
      Test: "test",

      // Profile: {
      //   path: "profile",
      //   screens: {
      //     ProfileMain: "profile",
      //   },
      // },
      // ProfileMain: "profile",
      // Main: "main",
      // Comments: "comments",
      // Test: "test",
      // Feed: {
      //   path: "feed",
      //   screens: {
      //     FeedMain: "feed",
      //     FeedCreate: "feed_create",
      //     FeedCurrent: "feed_current",
      //     FeedEdit: "feed_edit",
      //     Upload: "feed/upload",
      //     Comments: "comments",
      //   },
      // },
      // Quiz: {
      //   path: "quiz",
      //   screens: {
      //     QuizList: "quiz_list",
      //     QuizCreate: "quiz_create",
      //     QuizCurrent: "quiz_current",
      //     QuizEdit: "quiz_edit",
      //     QuizMain: "quiz_start",
      //   },
      // },
      // Register: "register",
      // Chat: "chat",
    },
  },
};
