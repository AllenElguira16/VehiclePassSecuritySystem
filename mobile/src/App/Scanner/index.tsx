import React, { useState, useEffect, FC } from "react";
import {
  Text,
  View,
  Button,
  Alert,
  Dimensions,
  StyleSheet
} from "react-native";
import { BarCodeScanner, BarCodeScannedCallback } from "expo-barcode-scanner";
import { askAsync, CAMERA } from "expo-permissions";
import Axios from "axios";
import { Header } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Actions } from "react-native-router-flux";

const Scanner: NavigationStackScreenComponent = props => {
  const [state, setState] = useState({
    hasCameraPermission: false,
    scanned: false,
    type: BarCodeScanner.Constants.Type.back
  });

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await askAsync(CAMERA);
      setState({
        ...state,
        hasCameraPermission: status === "granted"
      });
    };
    getPermission();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = async barcode => {
    if (!state.scanned) {
      setState({
        ...state,
        scanned: true
      });
      const { data } = await Axios.post("/user/check", { id: barcode.data });

      if (data.error) Alert.alert("Error!", "QRCode is not valid");
      else Alert.alert("Success", "You have 10 seconds before the gate closes");

      setTimeout(() => {
        setState({
          ...state,
          scanned: false
        });
      }, 8000);
    }
  };

  const toggleCamera = () => {
    if (state.type === 1)
      setState({
        ...state,
        type: 2
      });
    else if (state.type === 2)
      setState({
        ...state,
        type: 1
      });
  };
  // if (state.hasCameraPermission === null)
  //   return <Text>Request for camera permission</Text>;
  if (state.hasCameraPermission === false)
    return <Text>No camera permission</Text>;
  return (
    // <ThemeProvider>
    <>
      {/* <Header centerComponent={{text: 'Vehicle Pass Security System'}} /> */}
      <View style={styles.container}>
        <BarCodeScanner
          type={state.type}
          onBarCodeScanned={handleBarCodeScanned}
          // style={{
          //   height: Dimensions.get("window").height,
          //   width: Dimensions.get("window").width,
          //   zIndex: -1
          // }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 15,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Button onPress={toggleCamera} title="Flip Camera" />
          <Button onPress={() => Actions.settings()} title="Settings" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2c3539",
    padding: 10,
    width: 300,
    marginTop: 16
  },
  heading: {
    color: "black",
    fontSize: 24,
    alignSelf: "center",
    padding: 10,
    marginTop: 30
  },
  simpleText: {
    color: "black",
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
    marginTop: 16
  }
});

export default Scanner;
