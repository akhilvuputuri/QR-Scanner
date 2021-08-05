import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navigation/Navbar';
import { createAppContainer,createSwitchNavigator } 
  from 'react-navigation';
import LoginScreen from './app/screens/LoginScreen'; 
import { createStackNavigator } from '@react-navigation/stack';


import { 
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic 
} from '@expo-google-fonts/open-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic
  });

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
const MyStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Log In"
          component={LoginScreen}
        />
        <Stack.Screen name="HomeScreen" component={Navbar} />
      </Stack.Navigator>
  );
};
