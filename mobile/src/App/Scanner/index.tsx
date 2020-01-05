import React, { useState, useEffect, FC } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { BarCodeScanner, BarCodeScannedCallback } from "expo-barcode-scanner";
import { askAsync, CAMERA } from "expo-permissions";
import Axios from "axios";
import Alert from "../Alert";
import Buttons from "./Buttons";

const Scanner: FC = props => {
  const [state, setState] = useState({
    hasCameraPermission: false,
    scanned: false,
    type: BarCodeScanner.Constants.Type.back
  });
  const [alert, setAlert] = useState({
    isOpen: false,
    msg: ""
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
      // console.log(data)
      if (data.success) setAlert({ isOpen: true, msg: data.success });
      // else if (data.success) Alert.alert("Success", data.success);

      setTimeout(() => {
        setState({ ...state, scanned: false });
        setAlert({ isOpen: false, msg: "" });
      }, 2000);
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
        <Buttons toggleCamera={toggleCamera} />
      </View>
      <Alert msg={alert.msg} isOpen={alert.isOpen} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default Scanner;
