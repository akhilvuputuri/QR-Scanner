import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, TouchableWithoutFeedback } from "react-native";
import colors from '../../assets/colors';

function VoucherInfoScreen({ navigation, route }) {
  const { shopName, voucherName, description, rating, cost, value, imageUrl } = route.params.item;
  console.log(shopName)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.backContainer}>
          <Image 
            source={require('../../assets/icons/back-arrow.png')}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ height: 280, width: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dodgerblue,
  },
  backContainer: {
    marginHorizontal: 10,
    width: 30,
    height: 30,
  },
  imageContainer: {
    marginTop: 10,
    height: 400,
    width: '100%',
    flex: 1,
  }
});

export default VoucherInfoScreen;
