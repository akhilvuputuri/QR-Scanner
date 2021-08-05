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
import APIHOST from '../../config';

function VouchersScreen( {navigation} ) {
  const [vouchers, setVouchers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${APIHOST}:8080/api/vouchers/all`)
      .then((res) => {
        console.log(res.data)
        const allVouchers = res.data.vouchers;
        const nonRedeemed = allVouchers.filter(v => v.redeemed !== true);
        setVouchers(nonRedeemed);
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
                return <MyVCard item={item} key={idx} navigation={navigation}/>;
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
