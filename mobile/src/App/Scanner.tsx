import React, { useState, useEffect } from "react";
import { Text, View, Button, Alert, StatusBar, Dimensions } from "react-native";
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
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginTop: StatusBar.currentHeight
      }}
    >
      <BarCodeScanner
        type={state.type}
        onBarCodeScanned={handleBarCodeScanned}
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
          zIndex: -1
        }}
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
        <Button onPress={toggleCamera} title="Settings" />
      </View>
    </View>
  );
};
