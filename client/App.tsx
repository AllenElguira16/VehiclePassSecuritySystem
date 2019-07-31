import React, { useState } from 'react'
import { View } from 'react-native'
import { Header, ThemeProvider, Text } from 'react-native-elements'

export default () => {
  let [state, setState] = useState({
    QRCodeValue: '',
    Start_Scanner: false
  })

  const onQRCodeScan = (QRCode: string) => {
    setState({
      QRCodeValue: QRCode,
      Start_Scanner: false
    })
  }

  return (
    <View>
      <Header 
        leftComponent={{ icon: 'menu', color: '#FFF' }}
        centerComponent={{ text: 'Vehicle Pass Security System', style: { color: '#FFF', fontWeight: 'bold' } }}
        rightComponent={{ icon: 'home', color: '#FFF' }}
      />
      <Text h4>QR Code Scanner</Text>
    </View>
  );
}