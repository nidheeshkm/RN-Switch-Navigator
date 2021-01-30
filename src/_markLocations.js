import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getlocation = (increment) => {
  return {
    timestamp: 10000000,

    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 76.294727 + increment * tenMetersWithDegrees,
      latitude: 11.261581 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getlocation(counter),
  });
  counter++;
}, 1000);
