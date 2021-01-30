import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children }) => {
  return <View style={stylesheet.viewstyle}>{children}</View>;
};

const stylesheet = StyleSheet.create({
  viewstyle: {
    margin: 12,
  },
});

export default Spacer;
