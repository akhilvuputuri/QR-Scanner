import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";

const MyVCard = ({ item, last, navigation }) => {
  const {
    id,
    shopName,
    voucherName,
    description,
    rating,
    cost,
    value,
    imageUrl,
    expiry,
  } = item;

  const displayExpiry = item.expiry.split("T")[0];

  // shopName, expiry, value
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate('MyVoucherDetailsScreen', { item })}
  >
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, fontFamily: "OpenSans_700Bold" }}>
          {shopName}
        </Text>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, fontFamily: "OpenSans_700Bold" }}>
            {displayExpiry}
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "OpenSans_700Bold" }}>
            Value: ${value}
          </Text>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginLeft: 32,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default MyVCard;
