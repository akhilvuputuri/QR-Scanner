import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Text, Image, Button, Separator, TouchableOpacity } from "react-native";


function LoginScreen({onPress, title}) {
    return (
        <SafeAreaView style={[styles.screen]}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>

            <Text style={styles.brandName}> Value Dollar </Text>
            <Text style={styles.brandMotto}> Start Saving With Us </Text>
     
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#0496ff'
      },
    logo:{
     alignSelf: 'center'
    },
    brandName:{
        color: 'white',
        fontWeight: "bold",
        fontSize: 30,
        alignSelf: 'center',
        top: 20

    },
    brandMotto:{
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        top: 40
    },
    button: {
        position: 'absolute',
        alignContent: 'flex-end',
        color: 'white'
    }
       
      
     

  });

export default LoginScreen;