import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, submitText, onSubmit, errorText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>

      <Input
        label="Email"
        autoCapitalize={false}
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
      />

      <Input
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Spacer>
        <Button
          title={submitText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
      <Spacer></Spacer>
      {errorText ? (
        <Text style={stylesheet.errorStyle}>{errorText}</Text>
      ) : null}
    </>
  );
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

export default AuthForm;
