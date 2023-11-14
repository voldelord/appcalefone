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
import NewHome from '../screens/NewHome';
import Homes from '../screens/Homes';
import Scenary from '../screens/Scenery';
import NewScenary from '../screens/NewScenary';
import Scenarys from '../screens/Scenarys';
import Home from '../screens/Home';
import HomeDevices from '../screens/HomeDevices';
import SearchDevice from '../screens/SearchDevice';
import AddDevices from '../screens/AddDevices';
const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="MyDevices" component={MyDevices} />
      <Stack.Screen name="HomeDevices" component={HomeDevices} />
      <Stack.Screen name="DevicesCom" component={DevicesCom} />
      <Stack.Screen name="WirelessCom" component={WirelessCom} />
      <Stack.Screen name="CalefonRange" component={CalefonRange} />
      <Stack.Screen name="NewHome" component={NewHome}/>
      <Stack.Screen name="Homes" component={Homes}/>
      <Stack.Screen name="Scenary" component={Scenary}/>
      <Stack.Screen name='NewScenary' component={NewScenary} />
      <Stack.Screen name='Scenarys' component={Scenarys} />
      <Stack.Screen name= 'Home' component={Home}/>
      <Stack.Screen name='SearchDevice' component={SearchDevice} />
      <Stack.Screen name='AddDevices' component={AddDevices} />
    </Stack.Navigator>
  );
};
