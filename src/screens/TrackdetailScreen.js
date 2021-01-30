import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";
import MapView, { Polyline } from "react-native-maps";

const TrackdetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((t) => t._id === _id);
  const initialcoords = track.locations[0].coords;
  return (
    <View>
      <Spacer>
        <Text style={{ fontSize: 32, alignSelf: "center" }}>{track.name}</Text>
      </Spacer>
      <Spacer />
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialcoords,
        }}
        style={stylesheet.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  map: {
    height: 500,
  },
});

export default TrackdetailsScreen;
