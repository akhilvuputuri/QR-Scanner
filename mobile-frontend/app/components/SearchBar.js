import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Searchbar } from 'react-native-paper';

function SearchBar({ searchQuery, onChangeSearch, placeholder }) {
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

const styles = StyleSheet.create({
  searchbarContainer: {
    position: 'absolute',
    top: 20,
    left: 30,
    right: 30,
  }
});

export default SearchBar;
