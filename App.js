import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackcreateScreen from "./src/screens/TrackcreateScreen";
import TrackdetailScreen from "./src/screens/TrackdetailScreen";
import TracklistScreen from "./src/screens/TracklistScreen";
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";
import authResolveScreen from "./src/InitialScreen";
import { FontAwesome } from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
  TrackList: TracklistScreen,
  TrackDetail: TrackdetailScreen,
});
trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: authResolveScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: trackListFlow,
    Trackcreate: TrackcreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
