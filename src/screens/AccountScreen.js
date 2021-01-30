import React, { useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/Spacer";
import { FontAwesome } from "@expo/vector-icons";
const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Spacer>
        <Button title="Signout" onPress={() => signout()} />
      </Spacer>
    </SafeAreaView>
  );
};
AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const stylesheet = StyleSheet.create({});

export default AccountScreen;
