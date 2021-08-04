import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import SearchBar from '../components/SearchBar';
import { IconButton, Button } from 'react-native-paper';

function HomeScreen(props) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <SafeAreaView
    style={styles.background}>

      <View
      style={styles.searchBarContainer}>
        <View style={{}}>

        </View>
        <Text style={styles.welcomeText}>Welcome Back Willy!</Text>
        <View style={{width: 350}}>
          <SearchBar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.tapWrapper2}>
          <View style={styles.tap2}>
            <Text style={{
                fontSize: 20,
                color: '#fff',
                fontFamily: "OpenSans_400Regular"
                }}>My Savings</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <IconButton icon="cash-usd" color="black" size={40} styles={{
                flex: 1
              }}/>
              <Text style={{
                flex: 1,
                fontSize: 30,
                color: '#fff',
                fontFamily: "OpenSans_400Regular"
                }}>
                  $130
              </Text>
            </View>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.tap2}>
            <Text style={{
                color: '#fff',
                fontSize: 20,
                fontFamily: "OpenSans_400Regular"
                }}>My Coupons</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <IconButton icon="ticket-percent" color="black" size={40} styles={{
                flex: 1
              }}/>
              <Text style={{
                color: '#fff',
                flex: 1,
                fontSize: 30,
                fontFamily: "OpenSans_400Regular"
                }}>
                  40
              </Text>
            </View>
          </View>
          <Text style={{marginTop: 30, marginLeft: 25, fontSize: 30, color: '#fff',fontFamily: "OpenSans_600SemiBold"}}>Start saving today!</Text>
          <Text style={{marginTop: 70, marginLeft: 100,
            ...styles.headerText}}>Categories</Text>
        </View>
        
      </View>
      <View
      style={styles.body}>

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
            <Text>Desserts</Text>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  verticleLine: {
    height: '50%',
    width: 3,
    backgroundColor: '#fff',
  },
  body: {
    // backgroundColor: '#333',
    flex: 1
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    alignSelf: 'center',
    fontFamily: "OpenSans_600SemiBold"
  },
  tapWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 20,
    borderRadius: 20
  },
  tap: {
    // backgroundColor: 'white',
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
    paddingTop: 20,
    paddingRight: 50,
    paddingLeft: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  tap2: {
    // backgroundColor: 'white',
    width: 150,
    height: 100,
    margin: 2,
    // color: '#fff',
    lineHeight: 100,
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: "#0496FF",
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText:{
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontFamily: "OpenSans_400Regular",
    alignSelf: 'flex-start',
    paddingLeft: 30
  },
  searchBarContainer: {
    // backgroundColor: "#ffffff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;