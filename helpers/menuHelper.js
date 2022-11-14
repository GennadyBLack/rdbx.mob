import Login from "./../screens/auth/Login";
import Register from "./../screens/auth/Register";
import Public from "../screens/public/Public";
import Test from "../screens/Test";
import { getIcon } from "../helpers/iconHelper";
import EditProfileImage from "../screens/profile/EditProfileImage";
import EditProfileBackground from "../screens/profile/EditProfileBackground";
import EditProfile from "../screens/profile/EditProfile";
import UserSearch from "../screens/search/UserSearch";
import FriendList from "../screens/profile/FriendList";
import MyFriendRequests from "../screens/profile/MyFriendRequests";
import FriendRequests from "../screens/profile/FriendRequests";
import UserProfile from "../screens/profile/UserProfile";
import PostComments from "../screens/post/PostComments";
import ProfileNews from "../screens/profile/ProfileNews";

export const availableLinks = [
  {
    name: "Login",
    component: Login, // import("./../screens/auth/Login"),
    auth: true,
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

  {
    name: "EditProfileImage",
    component: EditProfileImage,
    auth: true,
    options: {
      headerShown: true,
      title: "Редактировать фото профиля",

      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "public",
    title: "Редактировать профиль",
  }, //
  {
    name: "EditProfileBackground",
    component: EditProfileBackground,
    auth: true,
    options: {
      headerShown: true,
      title: "Редактировать задний фон",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "public",
  },
  {
    name: "EditProfile",
    component: EditProfile,
    auth: true,
    options: {
      headerShown: true,
      title: "Редактировать профиль",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "public",
  },
  {
    name: "UserSearch",
    component: UserSearch,
    auth: false,
    options: {
      title: "Поиск по пользователям",
      headerShown: true,
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout: "public",
    title: "Поиск",
  },
  {
    name: "FriendList",
    component: FriendList,
    auth: false,
    options: {
      title: "Поиск по друзьям",
      headerShown: true,
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout: "public",
    title: "Друзья",
  },
  {
    name: "FriendRequests",
    component: FriendRequests,
    auth: false,
    options: {
      title: "Запросы дружбы",
      headerShown: true,
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout: "public",
    title: "Запросы дружбы",
  },
  {
    name: "MyFriendRequests",
    component: MyFriendRequests,
    auth: false,
    options: {
      title: "Мои запросы дружбы",
      headerShown: true,
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout: "public",
    title: "Мои запросы дружбы",
  },
  {
    name: "UserProfile",
    component: UserProfile,
    auth: true,
    options: {
      title: "Мои запросы дружбы",
      headerShown: false,
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "public",
  },
  {
    name: "PostComments",
    component: PostComments,
    auth: true,
    options: {
      title: "комментарии",
      headerShown: false,
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: false,
    layout: "public",
  },
  {
    name: "ProfileNews",
    component: ProfileNews,
    auth: false,
    options: {
      title: "Моя лента",
      headerShown: false,
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout: "public",
    title: "Моя лента",
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
      PostComments: "post_comments",
      MyFriendRequests: "my_friend_requests",
      FriendRequests: "friend_requests",
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
