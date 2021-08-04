import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import colors from '../../assets/colors';

function ProfileScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Profile screen</Text>
      <Text style={styles.heading}>placeholder</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dodgerblue,
  },
  heading: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 40,
  },
});

export default ProfileScreen;
