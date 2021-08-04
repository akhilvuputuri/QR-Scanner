import React from 'react';
import { StyleSheet, SafeAreaView, Text } from "react-native";

function VoucherInfoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text onPress={() => navigation.goBack()} >go back</Text>
    </SafeAreaView>
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

export default VoucherInfoScreen;
