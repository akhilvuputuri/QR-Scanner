import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import colors from '../../assets/colors';

const VoucherCard = ({ item }) => {
  const { shopName, voucherName, description, rating, cost, value, imageUrl } = item;
  const saved = (parseInt(value) - parseInt(cost)).toString();

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <View style={styles.savedPill}>
        <Text style={styles.savedText}>${saved} saved!</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{shopName}: {voucherName}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image 
              source={require('../../assets/icons/star-icon.png')}
              resizeMode='contain'
              style={{
                width: 16,
                height: 16,
                marginLeft: 2,
                marginRight: 5,
              }}
            />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.valueText}>${value}</Text>
            <Text style={styles.costText}>${cost}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 240,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 24,
  },
  savedPill: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 22,
    backgroundColor: colors.orange,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 5,
  },
  savedText: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
  },
  image: {
    height: 160,
    width: 240,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  bottomContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer: {
    height: 144,
    marginTop: 10,
  },
  heading: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 18,
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
    marginTop: 10,
  },
  ratingText: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
  },
  valueText: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    marginRight: 10,
    color: 'gray'
  },
  costText: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
    marginRight: 2,
  },
  ratingContainer: {
    height: 36,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }, 
});

export default VoucherCard;
