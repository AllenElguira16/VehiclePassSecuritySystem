import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, StyleSheet, Button } from "react-native";
// import { ThemeProvider, Header, Theme } from "react-native-elements";
import { BarCodeScanner, BarCodeScannedCallback } from "expo-barcode-scanner";
import { askAsync, CAMERA } from "expo-permissions";
import Axios from "axios";

export default () => {
  const [state, setState] = useState({
    hasCameraPermission: false,
    scanned: false
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
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = async barcode => {
    if (!state.scanned) {
      setState({
        ...state,
        scanned: true
      });
      Axios.post("/arduino/open");
      // const { data } = await Axios.get(`/vehicle/check/${barcode.data}`);
      // if (data.error) console.log("An error occured");
      // else console.log(data.success);
    }
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
      {!state.scanned && (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {state.scanned && (
        <Button
          title="Tap to scan again"
          onPress={() =>
            setState({
              ...state,
              scanned: false
            })
          }
        ></Button>
      )}
    </View>
  );
};
