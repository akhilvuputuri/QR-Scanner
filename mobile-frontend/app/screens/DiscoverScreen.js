import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import VoucherCard from '../components/VoucherCard';
import colors from '../../assets/colors';

const fakeData = [
  {
    shopName: 'adidas',
    voucherName: 'All Apparels',
    description: 'This voucher is applicable to all apparels.',
    rating: '4.99',
    cost: '20',
    value: '30',
    imageUrl: 'https://picsum.photos/200/300'
  },
  {
    shopName: 'nike',
    voucherName: 'All Shoes',
    description: 'This voucher is applicable to shoes only.',
    rating: '4.43',
    cost: '14',
    value: '30',
    imageUrl: 'https://picsum.photos/200/300'
  },
];

function DiscoverScreen(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.cardsContainer}>
            <Text
              style={styles.heading}
            >
              Nearby
            </Text>
            <View style={styles.voucherCardsWrapper}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {fakeData && fakeData.map((item, idx) => {
                  const last = idx + 1 === fakeData.length;
                  return (
                    <VoucherCard item={item} last={last} />
                  )
                })}
              </ScrollView>
            </View>
            <Text
              style={{
                marginTop: 20,
                ...styles.heading}}
            >
              Flash sale
            </Text>
            <View style={{
              marginBottom: 150,
              ...styles.voucherCardsWrapper
            }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {fakeData && fakeData.map((item, idx) => {
                  const last = idx + 1 === fakeData.length;
                  return (
                    <VoucherCard item={item} last={last} />
                  )
                })}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.dodgerblue,
  },
  searchbarContainer: {
    position: 'absolute',
    top: 20,
    left: 30,
    right: 30,
    zIndex: 1,
  },
  cardsContainer: {
    flex: 1,
    marginTop: 90,
  },
  heading: {
    fontFamily: 'OpenSans_800ExtraBold',
    color: 'white',
    fontSize: 24,
    left: 30,
    right: 30,
  },
  voucherCardsWrapper: {
    position: 'relative',
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    height: 350,
  }
});

export default DiscoverScreen;
