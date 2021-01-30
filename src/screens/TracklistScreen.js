import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";

const TracklistScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <NavigationEvents onWillFocus={fetchTracks} />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const stylesheet = StyleSheet.create({});

export default TracklistScreen;
