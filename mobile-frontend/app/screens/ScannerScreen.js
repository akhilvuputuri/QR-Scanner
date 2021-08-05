import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import APIHOST from '../../config';
import colors from "../../assets/colors";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // data here is qrcodetext
    const article = { id: data, redeemed: true };
    // for this put request use the /redeem api; 1. change the url acc to backend
    // when qr code is scanned the data is the id of voucher and will be sent to api to mark as redeemed
    axios
      .put(`http://${APIHOST}:8080/api/redeem`, article)
      .then((res) => {
        setScanned(true);
        alert(`Redeemed voucher with id: ${data}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned && <Button title="Tap to Scan Again" color="black" onPress={() => setScanned(false)} />}
      {!scanned && 
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dodgerblue,
  },
  barCodeView: {
    width: '100%', 
    height: '50%', 
    marginBottom: 40
  },
});