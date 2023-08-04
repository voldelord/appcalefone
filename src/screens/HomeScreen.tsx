import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const HomeScreen = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/1.jpg')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imagemedium} source={require('../assets/2.jpg')} />
      </View>
      <CustomButton
        label="Tutorial"
        onPress={handleButtonPress}
        color="#B0A2B6"
      />
      <CustomButton
        label="Iniciar"
        onPress={handleButtonPress}
        color="#B5206A"
      />
      <Text style={styles.parraph}>¿Ya eres Usuario? Registrate</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemedium: {
    width: 400,
    height: 400,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  parraph: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
  },
});

export default HomeScreen;
