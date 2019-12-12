import React, { useState, useEffect, FC } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { BarCodeScanner, BarCodeScannedCallback } from "expo-barcode-scanner";
import { askAsync, CAMERA } from "expo-permissions";
import Axios from "axios";
import { Actions } from "react-native-router-flux";

const Scanner: FC = props => {
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
      setState({ ...state, scanned: true });
      const { data } = await Axios.post("/user/check", { id: barcode.data });

      if (data.error) Alert.alert("Error!", "QRCode is not valid");
      else Alert.alert("Success", "You have 10 seconds before the gate closes");

      setTimeout(() => {
        setState({ ...state, scanned: false });
      }, 8000);
    }
  };

  const toggleCamera = () => {
    setState({
      ...state,
      type: state.type === 1 ? 2 : 1
    });
  };

  if (state.hasCameraPermission === null)
    return <Text>Request for camera permission</Text>;
  if (state.hasCameraPermission === false)
    return <Text>No camera permission</Text>;
  return (
    <>
      <View style={styles.container}>
        <BarCodeScanner
          type={state.type}
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={toggleCamera}
            title="Flip Camera"
          />
          <Button
            style={styles.button}
            onPress={() => Actions.settings()}
            title="Settings"
          />
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
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2c3539",
    padding: 10,
    width: 300,
    marginTop: 16
  }
});

export default Scanner;
