import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
// import { ThemeProvider, Header, Theme } from "react-native-elements";
// import { Constants } from "expo";
import { BarCodeScanner, BarCodeScannedCallback } from "expo-barcode-scanner";
import { askAsync, CAMERA } from "expo-permissions";
import Axios from "axios";

export default () => {
  const [state, setState] = useState({
    hasCameraPermission: false,
    scanned: false,
    type: BarCodeScanner.Constants.Type.back
  });

  useEffect(() => {
    const getPermission = async () => {
      // console.log(Permissions);
      const { status } = await askAsync(CAMERA);
      setState({
        ...state,
        hasCameraPermission: status === "granted"
      });
    };
    getPermission();
    console.log(BarCodeScanner.Constants.Type);
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = async barcode => {
    if (!state.scanned) {
      setState({
        ...state,
        scanned: true
      });
      const { data } = await Axios.post("/user/check", { id: barcode.data });
      if (data.error) Axios.post("/arduino/warn");
      else {
        await Axios.post("/arduino/open");
        Alert.alert("Alert", "Msg");
      }
      setTimeout(() => {
        setState({
          ...state,
          scanned: false
        });
      }, 5000);
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
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      <BarCodeScanner
        type={state.type}
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Button onPress={toggleCamera} title="Flip Camera" />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btn: {
    // back
    width: "40%",
    padding: "4px",
    height: 40
  }
});
