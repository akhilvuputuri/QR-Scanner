import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from './DiscoverScreen';
import VoucherInfoScreen from './VoucherInfoScreen';

const Stack = createStackNavigator();

const DiscoverScreenStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="DiscoverScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{ title: 'Discover Screen' }}
      />
      <Stack.Screen 
        name="VoucherInfoScreen"
        component={VoucherInfoScreen}
        options={{ title: 'VoucherInfo' }}
      />
    </Stack.Navigator>
  );
};

export default DiscoverScreenStack;