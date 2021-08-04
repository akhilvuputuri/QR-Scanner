import React from 'react';
import { StyleSheet, View, Text } from "react-native";

function ScannerScreen(props) {
  return (
    <View style={styles.background}>
      <Text>Scan Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default ScannerScreen;
