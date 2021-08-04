import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Searchbar, IconButton, Button } from 'react-native-paper';

function HomeScreen(props) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <View
    style={styles.background}>
      <View
      style={styles.searchBarContainer}>
        <Text style={styles.welcomeText}>Welcome Back Willy!</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View style={styles.tapWrapper2}>
          <View style={styles.tap2}>
            <Text style={{
                fontSize: 20,
                }}>My Savings</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <IconButton icon="cash-usd" size={40} styles={{
                flex: 1
              }}/>
              <Text style={{
                flex: 1,
                fontSize: 30,
                }}>
                  $130
              </Text>
            </View>
          </View>
          <View style={styles.tap2}>
            <Text style={{
                fontSize: 20,
                }}>My Coupons</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <IconButton icon="ticket-percent" size={40} styles={{
                flex: 1
              }}/>
              <Text style={{
                flex: 1,
                fontSize: 30,
                }}>
                  40
              </Text>
            </View>
          </View>
        </View>
        <Text>Start saving today!</Text>
      </View>
      <View
      style={styles.body}>
        <Text style={styles.headerText}>Categories</Text>
        <View style={styles.tapWrapper}>
          <View style={styles.tap}>
            <IconButton icon="food" size={50} styles={styles.tap}/>
            <Text>Food</Text>
          </View>
          <View style={styles.tap}>
            <IconButton icon="shopping" size={50} styles={styles.tap}/>
            <Text>Shopping</Text>
          </View>
          <View style={styles.tap}>
            <IconButton icon="beach" size={50} styles={styles.tap}/>
            <Text>Vacation</Text>
          </View>
          <View style={styles.tap}>
            <IconButton icon="bike" size={50} styles={styles.tap}/>
            <Text>Travel</Text>
          </View>
          <View style={styles.tap}>
            <IconButton icon="run" size={50} styles={styles.tap}/>
            <Text>Fitness</Text>
          </View>
          <View style={styles.tap}>
            <IconButton icon="ice-cream" size={50} styles={styles.tap}/>
            <Text>Dessers</Text>
          </View>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#333',
    flex: 1
  },
  headerText: {
    color: '#000',
    fontSize: 30,
    alignSelf: 'center'
  },
  tapWrapper: {
    // padding: 50,
    paddingTop: 0,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tap: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 2,
    color: '#fff',
    lineHeight: 100,
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapWrapper2: {
    flex: 1,
    padding: 50,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tap2: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    margin: 2,
    color: '#fff',
    lineHeight: 150,
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: "#0496FF",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText:{
    margin: 40
  },
  searchBarContainer: {
    // backgroundColor: "#ffffff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;