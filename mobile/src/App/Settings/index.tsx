import React, { FC, useState } from "react";
import { Text, Input } from "react-native-elements";
import { View } from "react-native";

const Settings: FC = () => {
  const [settings, changeSettings] = useState({
    duration: "8"
  });
  /**
   * Change Duration based on the text given by TextInput
   * @param duration value of duration //default 8
   */
  const changeDuration = (duration: string) => {
    changeSettings({ ...settings, duration });
  };
  return (
    <View>
      <Text>Settings</Text>
      <View>
        <Input
          onChangeText={changeDuration}
          placeholder="Duration"
          value={settings.duration}
        />
      </View>
    </View>
  );
};

export default Settings;
