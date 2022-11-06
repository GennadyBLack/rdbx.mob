import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const REM = 16,
  DANGER = "#D21100",
  SUCCESS = "#4DBE25",
  GREEN = "#66bfbf",
  WARNING = "#FCAB00",
  SECONDARY = "#555860",
  LIGHT = "#FAF3F3",
  PRIMARY = "#E1E5EA",
  LIGHT_PINK = "#e6ddee",
  DARK = "#2d2829",
  DARK_LIGHT = "#5B5456",
  LIGHT_GREY = "#A7BBC7",
  RUBY = "#DA7F8F",
  GRAY = "#918B8D",
  SPACER = 16,
  GRID_GUTTER_WIDTH = 8,
  BTN_BORDER_RADIUS = 55,
  BTN_BORDER_RADIUS_LG = 64;

export const constants = {
  LIGHT_PINK,
  LIGHT_GREY,
  RUBY,
  REM,
  DANGER,
  SUCCESS,
  WARNING,
  SECONDARY,
  LIGHT,
  GREEN,
  PRIMARY,
  DARK,
  DARK_LIGHT,
  GRAY,
  SPACER,
  GRID_GUTTER_WIDTH,
  BTN_BORDER_RADIUS,
  BTN_BORDER_RADIUS_LG,
};

const mainStyles = {
  //bgroung
  lgrey_bg: { backgroundColor: LIGHT_GREY },
  light_bg: { backgroundColor: LIGHT },
  prymary_bg: { backgroundColor: PRIMARY },
  dark_bg: { backgroundColor: DARK },
  grey_bg: { backgroundColor: GRAY },
  ruby_bg: { backgroundColor: RUBY },
  lpink_bg: { backgroundColor: LIGHT_PINK },
  //text

  lpink_c: { color: LIGHT_PINK },
  lgrey_c: { color: LIGHT_GREY },
  light_c: { color: LIGHT },
  prymary_c: { color: PRIMARY },
  dark_c: { color: DARK },
  grey_c: { color: GRAY },
  ruby_c: { color: RUBY },

  flex: { flex: 1 },
  j_c_center: { justifyContent: "center" },
  j_c_between: { justifyContent: "space-between" },
  j_c_end: { justifyContent: "end" },
  j_c_start: { justifyContent: "start" },
  j_c_center: { justifyContent: "center" },

  a_i_end: { alignItems: "flex-end" },
  a_i_start: { alignItems: "flex-start" },
  a_i_center: { alignItems: "center" },

  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  "opacity-0": { opacity: 0 },
  "opacity-25": { opacity: 0.25 },
  "opacity-50": { opacity: 0.5 },
  "opacity-70": { opacity: 0.7 },
  "opacity-75": { opacity: 0.75 },
  "opacity-100": { opacity: 1 },
  "flex-between": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 20,
  },
  buttonText: {
    color: LIGHT,
  },
  cGreen: {
    color: "#66bfbf",
  },
  title: { fontSize: 30 },

  profile_wrapper: {
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    height: 70,
    backgroundColor: LIGHT_GREY,
    // justifyContent: "center",
    alignItems: "center",
  },

  profile_avatar: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profile_name: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    // marginLeft: 20,
  },

  //font     fontWeight\

  fw_8: { fontWeight: "800" },
  fw_7: { fontWeight: "700" },
  fw_6: { fontWeight: "600" },
  fw_5: { fontWeight: "500" },
  fw_4: { fontWeight: "400" },
  fw_3: { fontWeight: "400" },
  fw_2: { fontWeight: "200" },
  fw_1: { fontWeight: "100" },

  //width
  w_0: {
    width: 0,
  },
  w_1: {
    width: `10%`,
  },
  w_2: {
    width: `20%`,
  },
  w_3: {
    width: `30%`,
  },
  w_4: {
    width: `40%`,
  },
  w_5: {
    width: `50%`,
  },
  //height
  h_0: {
    height: 0,
  },
  h_1: {
    height: `${REM * 0.25}%`,
  },
  h_2: {
    height: `${REM * 0.5}%`,
  },
  h_3: {
    height: `${REM}%`,
  },
  h_4: {
    height: `${REM * 1.5}%`,
  },
  h_5: {
    height: `${REM * 2}%`,
  },

  hp_0: {
    height: 0,
  },
  hp_1: {
    height: 100,
  },
  hp_2: {
    height: 200,
  },
  hp_3: {
    height: 300,
  },
  hp_4: {
    height: 400,
  },
  hp_5: {
    height: 500,
  },
  hp_6: {
    height: 600,
  },

  hp_7: {
    height: 700,
  },

  //MARGIN
  m_0: {
    margin: 0,
  },
  m_1: {
    margin: REM * 0.25,
  },
  m_2: {
    margin: REM * 0.5,
  },
  m_3: {
    margin: REM,
  },
  m_4: {
    margin: REM * 1.5,
  },
  m_5: {
    margin: REM * 2,
  },

  mb_0: {
    marginBottom: 0,
  },
  mb_1: {
    marginBottom: REM * 0.25,
  },
  mb_2: {
    marginBottom: REM * 0.5,
  },
  mb_3: {
    marginBottom: REM,
  },
  mb_4: {
    marginBottom: REM * 1.5,
  },
  mb_5: {
    marginBottom: REM * 2,
  },

  mt_0: {
    marginTop: 0,
  },
  mt_1: {
    marginTop: REM * 0.25,
  },
  mt_2: {
    marginTop: REM * 0.5,
  },
  mt_3: {
    marginTop: REM,
  },
  mt_4: {
    marginTop: REM * 1.5,
  },
  mt_5: {
    marginTop: REM * 2,
  },

  ml_0: {
    marginLeft: 0,
  },
  ml_1: {
    marginLeft: REM * 0.25,
  },
  ml_2: {
    marginLeft: REM * 0.5,
  },
  ml_3: {
    marginLeft: REM,
  },
  ml_4: {
    marginLeft: REM * 1.5,
  },
  ml_5: {
    marginLeft: REM * 2,
  },

  mr_0: {
    marginRight: 0,
  },
  mr_1: {
    marginRight: REM * 0.25,
  },
  mr_2: {
    marginRight: REM * 0.5,
  },
  mr_3: {
    marginRight: REM,
  },
  mr_4: {
    marginRight: REM * 1.5,
  },
  mr_5: {
    marginRight: REM * 2,
  },

  //PADDING
  p_0: {
    padding: 0,
  },
  p_1: {
    padding: REM * 0.25,
  },
  p_2: {
    padding: REM * 0.5,
  },
  p_3: {
    padding: REM,
  },
  p_4: {
    padding: REM * 1.5,
  },
  p_5: {
    padding: REM * 2,
  },

  pb_0: {
    marginBottom: 0,
  },
  pb_1: {
    paddingBottom: REM * 0.25,
  },
  pb_2: {
    paddingBottom: REM * 0.5,
  },
  pb_3: {
    paddingBottom: REM,
  },
  pb_4: {
    paddingBottom: REM * 1.5,
  },
  pb_5: {
    paddingBottom: REM * 2,
  },

  pt_0: {
    paddingTop: 0,
  },
  pt_1: {
    paddingTop: REM * 0.25,
  },
  pt_2: {
    paddingTop: REM * 0.5,
  },
  pt_3: {
    paddingTop: REM,
  },
  pt_4: {
    paddingTop: REM * 1.5,
  },
  pt_5: {
    paddingTop: REM * 2,
  },

  pl_0: {
    paddingLeft: 0,
  },
  pl_1: {
    paddingLeft: REM * 0.25,
  },
  pl_2: {
    paddingLeft: REM * 0.5,
  },
  pl_3: {
    paddingLeft: REM,
  },
  pl_4: {
    paddingLeft: REM * 1.5,
  },
  pl_5: {
    paddingLeft: REM * 2,
  },

  pr_0: {
    paddingRight: 0,
  },
  pr_1: {
    paddingRight: REM * 0.25,
  },
  pr_2: {
    paddingRight: REM * 0.5,
  },
  pr_3: {
    paddingRight: REM,
  },
  pr_4: {
    paddingRight: REM * 1.5,
  },
  pr_5: {
    paddingRight: REM * 2,
  },

  //border radius

  br: {
    borderRadius: REM,
  },
  br_1: {
    borderRadius: `10%`,
  },
  br_2: {
    borderRadius: `20%`,
  },
  br_3: {
    borderRadius: `30%`,
  },
  br_4: {
    borderRadius: `40%`,
  },
  br_5: {
    borderRadius: `50%`,
  },
};

const s = StyleSheet.create(mainStyles);

export const getStyle = (names = "", styles) => {
  const slpitN = names.split(".");

  let style = { ...styles };

  slpitN.forEach((item) => {
    style = { ...style, ...s[item] };
  });
  return { style };
};
export default s;
