// import React from "react";
// import { View, Text } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Scanner from "./Scanner";
import Settings from "./Settings";

// const AppNavigator = createStackNavigator({
//   Home: Scanner,
//   Settings: Settings
// });

// const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  // return <AppContainer />;
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Scanner} title="Scanner" initial />
        <Scene key="settings" component={Settings} title="Settings" />
      </Scene>
    </Router>
  );
};

export default App;
