import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, TouchableWithoutFeedback, Button, TouchableOpacity } from "react-native";
import colors from '../../assets/colors';

function VoucherInfoScreen({ navigation, route }) {
  const { shopName, voucherName, description, rating, cost, value, imageUrl } = route.params.item;
  // console.log(shopName)
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
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{shopName}: {voucherName}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.valueAndCostContainer}>
        <Text style={styles.textBolded}>Value:  </Text>
        <Text style={styles.textRegular}>${value}</Text>
      </View>
      <View style={styles.valueAndCostContainer}>
        <Text style={styles.textBolded}>Cost:  </Text>
        <Text style={styles.textRegular}>${cost}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Buy now!
          </Text>
        </TouchableOpacity>
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
    height: 280,
    width: '100%',
  },
  textContainer: {
    height: 220,
    marginTop: 16,
    marginHorizontal: 30,
  },
  heading: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 28,
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    color: '#fff',
    fontSize: 20,
    marginTop: 18,
  },
  valueAndCostContainer: {
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  textRegular: {
    fontFamily: 'OpenSans_400Regular',
    color: '#fff',
    fontSize: 20,
  },
  textBolded: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 20,
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 24,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  button: {
    height: 48,
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 20,
  },
});

export default VoucherInfoScreen;
