import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordScreen from '../screens/PasswordScreen';
import {Tabs} from './Tabs';
import MyDevices from '../screens/MyDevices';
import DevicesCom from '../screens/DevicesCom';
import WirelessCom from '../screens/WirelessCom';
import CalefonRange from '../screens/CalefonRange';
const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="MyDevices" component={MyDevices} />
      <Stack.Screen name="DevicesHome" component={Tabs} />
      <Stack.Screen name="DevicesCom" component={DevicesCom} />
      <Stack.Screen name="WirelessCom" component={WirelessCom} />
      <Stack.Screen name="CalefonRange" component={CalefonRange} />
    </Stack.Navigator>
  );
};
