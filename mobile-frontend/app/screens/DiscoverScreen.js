import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, ScrollView } from "react-native";
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
      <ScrollView style={styles.cardsContainer}>
        <Text
          style={styles.heading}
        >
          Nearby
        </Text>
        <ScrollView contentContainerStyle={styles.voucherCardsWrapper} directionalLockEnabled>
          {fakeData && fakeData.map((item) => {
            return (
              <VoucherCard item={item} />
            )
          })}
        </ScrollView>
      </ScrollView>
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
  },
  cardsContainer: {
    flex: 1,
    top: 100,
    left: 30,
    right: 30,
    height: 200,
  },
  heading: {
    fontFamily: 'OpenSans_800ExtraBold',
    color: 'white',
    fontSize: 24,
  },
  voucherCardsWrapper: {
    position: 'relative',
    marginTop: 5,
    flexDirection: 'row',
    flex: 1,
    height: 350,
  }
});

export default DiscoverScreen;
