import Login from './../screens/auth/Login'
import Register from './../screens/auth/Login'
import Auth from './../screens/auth/Auth'
import {getIcon} from '../helpers/iconHelper'

export const availableLinks  = [
    {
    name: "Login",
    component: Login,
    auth: true,
    options: {
      headerShown: false,
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => getIcon("user", color, size),
    },
    leftMenu: true,
    layout:'auth',

  },

]

// export const availableLinks = [
//   {
//     name: "ProfileMain",
//     component: ProfileMain,
//     auth: true,
//     options: {
//       headerShown: false,
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => getIcon("user", color, size),
//     },
//     required: true,
//     leftMenu: true,
//     icon: "user",
//   },
//   // {
//   //   name: "Test",
//   //   component: Test,
//   //   auth: true,
//   //   options: {
//   //     headerShown: true,
//   //     tabBarLabel: "",
//   //     tabBarIcon: ({ color, size }) => getIcon("list", color, size),
//   //   },
//   //   required: true,
//   //   leftMenu: true,
//   //   icon: "list",
//   // },

//   {
//     name: "Chat",
//     component: Chat,
//     auth: true,
//     options: {
//       headerShown: true,
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => getIcon("message1", color, size),
//     },
//     required: true,
//     leftMenu: true,
//     icon: "list",
//   },

//   {
//     name: "Feed",
//     component: Feed,
//     auth: true,
//     options: {
//       headerShown: false,
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => getIcon("home", color, size),
//     },
//     required: true,
//     leftMenu: true,
//     icon: "home",
//   },
//   {
//     name: "FeedEdit",
//     component: FeedEdit,
//     auth: true,
//     options: { headerShown: false },
//     required: false,
//   },
//   {
//     name: "FeedMain",
//     component: FeedMain,
//     auth: true,
//     options: { headerShown: false },
//     required: false,
//     leftMenu: true,
//   },
//   {
//     name: "FeedCreate",
//     component: FeedCreate,
//     auth: true,
//     options: { headerShown: false },
//     required: false,
//   },
//   {
//     name: "FeedCurrent",
//     component: FeedCurrent,
//     auth: true,
//     options: { headerShown: false },
//     required: false,
//   },
//   {
//     name: "Comments",
//     component: Comments,
//     auth: true,
//     options: { headerShown: true },
//     required: false,
//   },
//   // {
//   //   name: "FeedEdit",
//   //   component: FeedEdit,
//   //   auth: true,
//   //   options: { headerShown: false },
//   //   required: false,
//   // },
//   {
//     name: "Upload",
//     component: Upload,
//     auth: true,
//     options: { headerShown: false },
//     required: false,
//   },

//   {
//     name: "Cam",
//     component: Cam,
//     auth: true,
//     options: { headerShown: false },
//     required: false,
//   },

//   {
//     name: "Quiz",
//     component: Quiz,
//     auth: true,
//     options: {
//       headerShown: false,
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => getIcon("question", color, size),
//     },
//     required: false,
//     leftMenu: true,
//     icon: "question",
//   },
//   {
//     name: "Login",
//     component: Login,
//     auth: false,
//     options: { headerShown: false },
//     required: false,
//   },
//   {
//     name: "Register",
//     component: Register,
//     auth: false,
//     options: { headerShown: false },
//     required: false,
//   },
//   {
//     name: "Users",
//     component: Users,
//     auth: true,
//     options: {
//       headerShown: false,
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => getIcon("persons", color, size),
//     },
//     required: true,
//     leftMenu: true,
//     icon: "persons",
//   },
// ];






//LINKING CONFIG
export const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Login: "login",
      
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
