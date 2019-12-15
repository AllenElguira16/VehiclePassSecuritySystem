import React, { FC, useState, useEffect } from "react";
import { Text, Input, Button } from "react-native-elements";
import { View, Alert, StyleSheet } from "react-native";
import Axios from "axios";

/**
 * Settings Page
 */
const Settings: FC = () => {
  const [timeout, changeTimeout] = useState("");

  useEffect(() => {
    const getTimeOut = async () => {
      const { data } = await Axios.get("/settings/timeout");
      changeTimeout(`${data.value}`);
    };
    getTimeOut();
  }, []);

  /**
   * Change Duration based on the text given by TextInput
   * @param duration value of duration //default 8
   */
  const changeDuration = async (duration: string) => {
    changeTimeout(duration);
  };

  /**
   * Submit data to server with axios
   */
  const onSubmit = async () => {
    const { data } = await Axios.post("/settings/timeout", {
      timeout
    });
    if (data.success) Alert.alert("Success!", "Submitted Successfully");
    else Alert.alert("Error!", "Error updating");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Timeout - ms</Text>
        <Input onChangeText={changeDuration} value={timeout} />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    flexDirection: "row"
  }
});

export default Settings;
