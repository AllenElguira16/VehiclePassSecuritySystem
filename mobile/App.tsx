import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { ThemeProvider, Header, Theme } from 'react-native-elements'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        {/* <StatusBar hidden={true} barStyle="light-content"/> */}
        <Header
          centerComponent={
            <Text style={{
              color: '#FFF'
            }}>Vehicle Pass Security System - Scanner</Text>
          }
        />
      </View>
    </ThemeProvider>
  );
}

const theme: Theme = {
  Header: {
    containerStyle: {
      backgroundColor: '#932842'
    },
    leftComponent: {
      icon: "menu",
      color: "#FFF"
    }
  }
}