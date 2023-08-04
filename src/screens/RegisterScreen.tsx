import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const RegisterScreen = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('RegisterScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/1.jpg')} />
      </View>
      <Text style={styles.parraph}>Registro</Text>
      <TextInput style={styles.input} placeholder="Ingrese Email" />
      <BouncyCheckbox
        style={styles.checkbox}
        size={20}
        fillColor="green"
        unfillColor="#FFFFFF"
        text="Estoy deacuerdo con la Politica de Privacidad, Acuerdo del Usuario y Politica de Privacidad Infantil"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          fontSize: 10,
          textAlign: 'justify',
          marginRight: 10,
          marginBottom: 10,
        }}
        onPress={(isChecked: boolean) => {}}
      />
      <View style={styles.imagecentercontainer}>
        <Image
          style={styles.imagecenter}
          source={require('../assets/google.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="Enviar Correo de Verificacion"
          onPress={handleButtonPress}
          color="#B5206A"
        />
      </View>
      <View>
        <Text style={styles.textfooter}>¿No eres Usuario? Registrate</Text>
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
  checkbox: {
    marginHorizontal: 20,
  },
  imagecentercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    padding: 40,
  },
  imagecenter: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 50,
    padding: 30,
  },
  textfooter: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default RegisterScreen;
