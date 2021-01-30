import createDataContext from "./createDataContext";
import Api from "../api/axios";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "login_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { ...state, token: action.payload };
    case "signin":
      return { ...state, token: action.payload };
    case "signout":
      return { ...state, token: "" };
    case "clearErrorMessage":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await Api.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      console.log(err);
      dispatch({ type: "add_error", payload: "Something went wrong" });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await Api.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      console.log(err);
      dispatch({ type: "login_error", payload: "Login Error" });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch({ type: "signout" });
      navigate("loginFlow");
    } catch (err) {
      console.log(err);
      dispatch({ type: "add_error", payload: "Something went wrong" });
    }
  };
};

const tryLocalSignIn = (dispatch) => {
  return async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      dispatch({ type: "signin", payload: token });
      navigate("TrackList");
    } catch (err) {
      console.log(err);
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clearErrorMessage" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: "" }
);
