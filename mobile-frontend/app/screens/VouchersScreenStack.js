import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VouchersScreen from './VouchersScreen'
import MyVoucherDetailsScreen from './MyVoucherDetailsScreen';

const Stack = createStackNavigator();

const VouchersScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="VouchersScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="VouchersScreen"
        component={VouchersScreen}
        options={{ title: 'VouchersScreen' }}
      />
      <Stack.Screen 
        name="MyVoucherDetailsScreen"
        component={MyVoucherDetailsScreen}
        options={{ title: 'MyVoucherDetailsScreen' }}
      />
    </Stack.Navigator>
  );
};

export default VouchersScreenStack;