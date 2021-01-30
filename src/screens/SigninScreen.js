import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity,SafeAreaView } from "react-native";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={stylesheet.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="SignIn screen"
        submitText="SignIn"
        errorText={state.errorMessage}
        onSubmit={signin}
      />
      <Spacer />
      <NavLink
        text="Don't have an account? Click here to Sign up"
        route="Signup"
      />
    </View>
  );
};
SigninScreen.navigationOptions = ({ navigation }) => {
  return {
    header: null,
  };
};
const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  errorStyle: {
    color: "red",
  },
});

export default SigninScreen;
