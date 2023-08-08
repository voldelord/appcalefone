import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const PasswordScreen = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('DevicesHome'); // Cambia el nombre a 'HomeDevices'
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/1.jpg')} />
      </View>
      <Text style={styles.parraph}>Contraseña</Text>
      <TextInput style={styles.input} placeholder="Ingrese Email" />
      <TextInput style={styles.input} placeholder="Ingrese Email" />
      <View style={styles.buttonContainer}>
        <CustomButton
          label="Confirmar"
          onPress={handleButtonPress}
          color="#B5206A"
        />
        <View>
          <Text style={styles.textfooter}>¿No eres Usuario? Registrate</Text>
        </View>
      </View>
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  parraph: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 250,
    padding: 30,
  },
  textfooter: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default PasswordScreen;
