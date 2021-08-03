import React from 'react';
import { StyleSheet, View, Text } from "react-native";

function ProfileScreen(props) {
  return (
    <View style={styles.background}>
      <Text>Profile Screen</Text>
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

export default ProfileScreen;
