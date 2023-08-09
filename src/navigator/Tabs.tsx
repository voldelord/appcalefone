import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeDevices from '../screens/HomeDevices';
import AddDevices from '../screens/AddDevices';
import Calefon from '../screens/Calefon';
import KeyConfigDevices from '../screens/KeyConfigDevices';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeDevices') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddDevices') {
            iconName = focused ? 'cog' : 'cog-outline';
          } else if (route.name === 'Calefon') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === 'KeyConfigDevices') {
            iconName = focused ? 'exit' : 'exit-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B5206A',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {display: 'flex'}, // Puedes ajustar otros estilos aquí
      })}>
      <Tab.Screen name="HomeDevices" component={HomeDevices} />
      <Tab.Screen name="AddDevices" component={AddDevices} />
      <Tab.Screen name="Calefon" component={Calefon} />
      <Tab.Screen name="KeyConfigDevices" component={KeyConfigDevices} />
    </Tab.Navigator>
  );
};
