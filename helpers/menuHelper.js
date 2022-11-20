import Login from "./../screens/auth/Login";
import Register from "./../screens/auth/Register";
import Public from "../screens/public/Public";
import Test from "../screens/Test";
import { getIcon } from "../helpers/iconHelper";
import RegisterSetPassword from "../screens/auth/RegisterSetPassword";
import UserProfile from "../screens/profile/UserProfile";
import ProfileSettings from "../screens/profile/ProfileSettings";
import Recomendations from "../screens/search/Recomendations";
import NotificationList from "../screens/NotificationList";

export const availableLinks = [
  {
    name: "Login",
    component: Login,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("login", color, size),
    },
    type: "auth",
    leftMenu: true,
    layout: "public",
    icon: "login",
    title: "Логин",
  },

  {
    name: "RegisterSetPassword",
    component: RegisterSetPassword,
    type: "auth",
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
    type: "auth",
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
    name: "UserProfile",
    component: UserProfile,
    type: "private",
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "public",
    icon: "login",
    title: "Профиль",
  },

  {
    name: "ProfileSettings",
    component: ProfileSettings,
    type: "private",
    options: {
      title: "Настройки",
      headerShown: true,
      tabBarLabel: "Настройки",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "public",
    icon: "login",
    title: "Настройки",
  },

  {
    name: "Public",
    component: Public,
    type: "public",
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
    type: "private",
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
  {
    name: "Recomendations",
    component: Recomendations,
    type: "private",
    leftMenu: true,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("hearto", color, size),
    },
    layout: "public",
    icon: "hearto",
    title: "Для вас",
  },

  {
    name: "NotificationList",
    component: NotificationList,
    type: "private",
    leftMenu: true,
    options: {
      headerShown: true,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("notification", color, size),
    },
    layout: "empty",
    icon: "notification",
    title: "Уведомления",
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
      Recomendations: "recomendations",

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
