// import React from "react";
// import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Scanner from "./Scanner";
import Settings from "./Settings";

const AppNavigator = createStackNavigator({
  Home: Scanner,
  Settings: Settings
});

export default createAppContainer(AppNavigator);
