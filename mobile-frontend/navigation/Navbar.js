import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../app/screens/HomeScreen';
import DiscoverScreenStack from '../app/screens/DiscoverScreenStack';
import ScannerScreen from '../app/screens/ScannerScreen';
import FavouritesScreen from '../app/screens/FavouritesScreen';
import ProfileScreen from '../app/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const QRButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: '#fff',
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
        tabBarItemStyle: {
          flex: 1,
          alignContent: 'center',
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image 
                source={require('../assets/icons/home-icon.png')}
                resizeMode='contain'
                style={{
                  marginTop: 30,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#d81159' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image 
                source={require('../assets/icons/search-icon.png')}
                resizeMode='contain'
                style={{
                  marginTop: 30,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#d81159' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScannerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image 
                source={require('../assets/icons/qr-icon.png')}
                resizeMode='contain'
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#d81159' : '#748c94',
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <QRButton {...props} />
          )
        }}
      />
      <Tab.Screen 
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image 
                source={require('../assets/icons/favourite-icon.png')}
                resizeMode='contain'
                style={{
                  marginTop: 30,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#d81159' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image 
                source={require('../assets/icons/person-icon.png')}
                resizeMode='contain'
                style={{
                  marginTop: 30,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#d81159' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default Navbar;
