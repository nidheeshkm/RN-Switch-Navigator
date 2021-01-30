import "../_markLocations";
import React, { useContext, useCallback } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { withNavigationFocus } from "react-navigation";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import { FontAwesome } from "@expo/vector-icons";

const TrackcreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />

      <Spacer />
      <Map />
      {err ? <Text>Please grand location permission</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackcreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const stylesheet = StyleSheet.create({});

export default withNavigationFocus(TrackcreateScreen);
