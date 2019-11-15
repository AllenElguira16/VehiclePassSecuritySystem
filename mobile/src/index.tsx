// import React, { useState, useEffect, FC } from "react";
// import { Text, View, StatusBar, StyleSheet, Button } from "react-native";
// import { ThemeProvider, Header, Theme } from "react-native-elements";
// import { BarCodeScanner } from "expo-barcode-scanner";
// import Permissions from "expo-permissions";
import { registerRootComponent } from "expo";
import Axios from "axios";
import App from "./App";
import Constants from "expo-constants";
const { manifest } = Constants;
const isProd = !__DEV__;

// if (manifest.debuggerHost) {
Axios.defaults.baseURL = isProd ? "" : "http://10.203.1.23:8000";
Axios.defaults.withCredentials = true;
// }

registerRootComponent(App);
