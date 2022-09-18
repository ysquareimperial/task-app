// import { BUSINESS_TYPES } from "../../constants";
import {
  LOGIN,
  // ERROR,
  // LOADING,
  LOGOUT,
  LOGGING_IN,
  RESTORE_TOKEN,
  LOGIN_ERROR,
  SIGN_UP_LOADING,
  SET_PROFILE,
  SET_APP_THEME,
} from "../action/actionType";

const initialState = {
  token: null,
  loggedIn: false,
  loggingIn: false,
  user: {},
  business: [],
  error: "",
  signupLoading: false,
  theme: {
    primary: "#4267B2", //appColor
    secondary: "#fff", // appColorFaded
    tertiary: "white", // white,
    black: "black", //black
    faded: "#f7f7f7", //faded
    inverse: "#292b2c",
  },
  activeBusiness: {
    primary_color: "#4267B2", //appColor
    secondary_color: "#fff", // appColorFaded
    tertiary_color: "white", // white,
    black: "black", //black
    faded: "#f7f7f7", //faded
    inverse: "#292b2c",
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        token: action.payload.access_token,
      };
    case LOGOUT:
      return {
        ...state,
        activeBusiness: action.payload,
      };
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: !state.loggingIn,
      };
    case RESTORE_TOKEN:
      return {
        ...state,
        token: action.payload.access_token,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SIGN_UP_LOADING:
      return {
        ...state,
        signupLoading: !state.signupLoading,
      };
    case SET_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case SET_APP_THEME:
      return {
        ...state,
        theme: { ...state.theme, ...action.payload },
      };
    default:
      return state;
  }
}
