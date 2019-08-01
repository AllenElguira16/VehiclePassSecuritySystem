import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Text, Button, Card } from 'react-native-elements'
import Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Constants } from 'expo';
import Axios from 'axios'

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
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    card: {
      // aspectRatio: 1
      flex: 1,
      aspectRatio: 1
    },
    qrCodeContainer: {
      alignItems: 'center',
    }
  }) 
  
  let sendMsg = async () => {
    // let {data} = await Axios.get('arduino/open-light')
    // console.log(data);
    console.log(Constants.manifest.split(':').shift().concat(`:8000`))
  } 

  return (
    <View>
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
      {/* <Card containerStyle={styles.card}> */}
      {/* <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.card}
        />
      </View> */}
      {/* </Card> */}
      <View style={styles.qrCodeContainer}>
        <Button title={'Send msg'} onPress={sendMsg} raised/>
      </View>
      {state.scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setState({ scanned: false })} />
      )}
    </View>
  );

}