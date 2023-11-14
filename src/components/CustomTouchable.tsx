import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de importar el ícono adecuado


const CustomTouchable = ({ imageSource, text, iconName, onPress }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} onPress={onPress}>
      <Image source={imageSource} style={{ width: 50, height: 50, marginRight: 10 }} />
      <Text>{text}</Text>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Icon name={iconName} size={30} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default CustomTouchable;
