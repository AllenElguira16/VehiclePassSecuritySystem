import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Header, Text, Button, Card } from 'react-native-elements'
import Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Constants from 'expo-constants';
import Axios from 'axios'
import { backendApi } from './helper';

export default () => {
  let [state, setState] = useState<AppStateInterface>({
    hasCameraPermission: undefined,
    scanned: false
  })

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    setState({ hasCameraPermission: status === 'granted' })
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }
  }) 
  
  let sendMsg = async () => {
    // await Axios.get(backendApi('/arduino/open-light'))
    // console.log(data);
    // console.log(ip)
  } 

  return (
    <>
      <Header 
        leftComponent={{ icon: 'menu', color: '#FFF' }}
        centerComponent={{ text: 'Vehicle Pass Security System', style: { color: '#FFF', fontWeight: 'bold' } }}
        rightComponent={{ icon: 'home', color: '#FFF' }}
      />
      {state.hasCameraPermission === undefined && 
        <Text>Requesting for camera permissions</Text>
      }
      {state.hasCameraPermission === false && 
        <Text>Access Denied: no permission for camera</Text>
      }
      {state.hasCameraPermission === true && 
        <Text h4>QR Code Scanner</Text>
      }
      <View
        style={styles.mainContainer}>
        <BarCodeScanner
          onBarCodeScanned={state.scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {state.scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => setState({ scanned: false })} />
        )}
      </View>
    </>
  );

}