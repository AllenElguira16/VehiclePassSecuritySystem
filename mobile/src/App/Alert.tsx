import React, { FC } from "react";
import { Modal } from "react-native";
import { Text } from "react-native-elements";

interface AlertProps {
  isOpen: boolean;
  msg: string;
}

const Alert: FC<AlertProps> = ({ isOpen, msg }) => {
  return (
    <Modal animationType={"slide"} transparent={false} visible={isOpen}>
      <Text>{msg}</Text>
    </Modal>
  );
};

export default Alert;
