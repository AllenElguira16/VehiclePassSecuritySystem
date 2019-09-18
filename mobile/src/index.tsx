// import React, { useState, useEffect, FC } from "react";
// import { Text, View, StatusBar, StyleSheet, Button } from "react-native";
// import { ThemeProvider, Header, Theme } from "react-native-elements";
// import { BarCodeScanner } from "expo-barcode-scanner";
// import Permissions from "expo-permissions";
import { registerRootComponent } from "expo";
import Axios from "axios";
import App from "./App";

const isProd = !__DEV__;

Axios.defaults.baseURL = isProd ? "" : "http://192.168.43.41:8000";
Axios.defaults.withCredentials = true;

registerRootComponent(App);
