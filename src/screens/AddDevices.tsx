import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const AddDevices = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('DevicesCom');
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.texttitle}>
          Introducir el codigo de configuracion del dispositivo matter
        </Text>
        <Text style={styles.textparraph}>
          Aplicable unicamente a un dispositivo matter. Buscar el codigo de
          configuracion en el dispositivo, embalaje o en el manual.
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Intruduce Codigo"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="Presionar"
          color="#B5206A"
          onPress={handleButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddDevices;

const styles = StyleSheet.create({
  texttitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
  },
  textparraph: {
    textAlign: 'justify', // Justificar el texto
    marginHorizontal: 20, // Margen horizontal para el centrado
    marginRight: 60,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#EAE9E9',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 30,
  },
});
