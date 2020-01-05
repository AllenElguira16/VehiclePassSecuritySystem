import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button } from "react-native-elements";

interface Props {
  toggleCamera: () => void;
}

const Buttons: FC<Props> = ({ toggleCamera }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default Buttons;
