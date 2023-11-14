import React from 'react';
import { SafeAreaView } from 'react-native';
import CustomTouchable from '../components/CustomTouchable';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const Modes = ({navigation}: Props) => {
    const handlePress = () => {
        navigation.navigate('NewHome');
      };

  return (
    <SafeAreaView>
      <CustomTouchable
        imageSource={require('../assets/your_image.png')} // Reemplaza con la ruta de tu imagen
        text="Texto a la izquierda"
        iconName="arrow-right" // Reemplaza con el nombre del ícono que desees usar
        onPress={handlePress}
      />
    </SafeAreaView>
  );
};

export default Modes;
