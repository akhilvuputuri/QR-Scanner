import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Text, Image, Button, Separator, Pressable, TextInput } from "react-native";
import * as Yup from "yup";
import Navbar from '../../navigation/Navbar';
import HomeScreen from './HomeScreen';



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

export function LoginScreen({navigation}) {

    return (
        <View style={[styles.screen]}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>

            <Text style={styles.brandName}> Value Dollar </Text>
            <Text style={styles.brandMotto}> Start Saving With Us </Text>

            <TextInput
                style={styles.signInText}
                autoCapitalize="none"
                icon="email"
                keyboardType="email-address"
                name="email"
                placeholder="Enter your email address"
                placeholderTextColor='gray'
                borderColor='gray'
                borderRadius={5}
                textContentType="emailAddress"
            />

            <View
            style={{
                borderBottomColor: '#0496ff',
                borderBottomWidth: 20,
            }}
            />
            
            <TextInput
                    style={styles.signInText}
                    borderRadius={5}
                    autoCapitalize="none"
                    name="password"
                    placeholder="Enter your password"
                    placeholderTextColor='gray'
                    borderColor= 'gray'
                    textContentType='password'
                    secureTextEntry={true}
            />
            
            <Pressable style={styles.button}
            onPress={()=>navigation.navigate(HomeScreen)}>
                <Text style={styles.buttonText}>Start saving!</Text>
            </Pressable>
            
        </View>
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
    brandName: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 30,
        alignSelf: 'center',
        top: 20,
        fontFamily: "OpenSans_800ExtraBold",
    },
    brandMotto: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        top: 40,
        height: 30,
        fontFamily: "OpenSans_600SemiBold",
    },
    button: {
        flex: 1,
        top: 650,
        width: '50%',
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        elevation: 3,
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#0496ff',
        alignSelf: 'center',
        fontFamily: "OpenSans_600SemiBold",
    },
    signInText: {
        width: '70%',
        top: 80,
        padding: 10,
        alignSelf: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        borderBottomColor: 'black',
        borderColor: '#fff',
        backgroundColor: "#fff",
        marginHorizontal: 5,
    }
  });

export default LoginScreen;
