import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import VoucherCard from "../components/VoucherCard";
import colors from "../../assets/colors";
import axios from "axios";
import APIHOST from '../../config';

function DiscoverScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [vouchers, setVouchers] = useState([])
  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    axios
      .get(`http://${APIHOST}:8080/api/vouchers/all`)
      .then((res) => {
        console.log(res.data)
        setVouchers(res.data.vouchers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              Deals under $20
            </Text>
            <View style={styles.voucherCardsWrapper}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {vouchers && vouchers.map((item, idx) => {
                  const last = idx + 1 === vouchers.length;
                  return (
                    <VoucherCard item={item} last={last} key={idx} navigation={navigation} />
                  )
                })}
              </ScrollView>
            </View>
            <Text
              style={{
                marginTop: 20,
                ...styles.heading,
              }}
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
                {vouchers && vouchers.map((item, idx) => {
                  const last = idx + 1 === vouchers.length;
                  return (
                    <VoucherCard item={item} last={last} key={idx} navigation={navigation} />
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
    justifyContent: "center",
    backgroundColor: colors.dodgerblue,
  },
  searchbarContainer: {
    position: 'absolute',
    top: 65,
    left: 30,
    right: 30,
    zIndex: 1,
  },
  cardsContainer: {
    flex: 1,
    marginTop: 90,
  },
  heading: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "white",
    fontSize: 24,
    left: 30,
    right: 30,
  },
  voucherCardsWrapper: {
    position: "relative",
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    height: 350,
  },
});

export default DiscoverScreen;
