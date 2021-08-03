import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from 'react-native-paper';

function HomeScreen(props) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <View
    style={styles.background}>
      <View
      style={styles.searchBarContainer}>
        <Text>Welcome Back Willy!</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Text>Start saving today!</Text>
      </View>
      <View
      style={styles.categoriesContainer}>
        <Text>Categories</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fc5c65",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;