import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={stylesheet.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Signup screen"
        submitText="Signup"
        errorText={state.errorMessage}
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <Spacer />
      <NavLink text="Already have an Account? please Signin" route="Signin" />
    </View>
  );
};
SignupScreen.navigationOptions = ({ navigation }) => {
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

export default SignupScreen;
