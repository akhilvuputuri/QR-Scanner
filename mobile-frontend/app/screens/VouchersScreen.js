import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import SearchBar from "../components/SearchBar";
import MyVCard from "../components/MyVCard";
import colors from "../../assets/colors";

const fakeData = [
  {
    shopName: "Adidas",
    voucherName: "All Apparels",
    description: "This voucher is applicable to all apparels.",
    rating: "4.99",
    cost: "20",
    value: "30",
    imageUrl: "https://picsum.photos/200/300",
    expiry: "9 August 2021",
  },
  {
    shopName: "Nike",
    voucherName: "All Shoes",
    description: "This voucher is applicable to shoes only.",
    rating: "4.43",
    cost: "14",
    value: "30",
    imageUrl: "https://picsum.photos/200/300",
    expiry: "21 September 2021",
  },
];

function VouchersScreen(props) {
  const [vouchers, setVouchers] = useState([]);
  useEffect(() => {
    axios
      .get("http://172.31.24.129:8080/api/vouchers/all")
      .then((res) => {
        setVouchers(res.data.vouchers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (vouchers.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.cardsContainer}>
              <Text style={styles.heading}>My Vouchers</Text>
              {vouchers.map((item, idx) => {
                return <MyVCard item={item} />;
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.cardsContainer}>
              <Text style={styles.heading}>My Vouchers</Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 180,
                }}
              >
                <Image
                  source={require("../../assets/icons/price-tag.png")}
                  resizeMode="contain"
                  style={{
                    marginBottom: 20,
                    width: 150,
                    height: 150,
                    // tintColor: focused ? '#d81159' : '#748c94',
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "OpenSans_700Bold",
                    color: "#fff",
                  }}
                >
                  You currently have no vouchers.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "OpenSans_700Bold",
                    color: "#fff",
                  }}
                >
                  Shop Now!
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.dodgerblue,
  },
  cardsContainer: {
    flex: 1,
    marginTop: 10,
  },
  heading: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "white",
    fontSize: 24,
    left: 30,
    right: 30,
  },
});

export default VouchersScreen;
