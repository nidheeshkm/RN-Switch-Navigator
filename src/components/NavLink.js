import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";
const NavLink = ({ navigation, text, route }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(route)}>
      <Spacer>
        <Text style={stylesheet.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};
const stylesheet = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
