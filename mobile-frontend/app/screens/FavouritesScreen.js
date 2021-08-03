import React from 'react';
import { StyleSheet, View, Text } from "react-native";

function FavouritesScreen(props) {
  return (
    <View style={styles.background}>
      <Text>Favourites Screen</Text>
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

export default FavouritesScreen;
