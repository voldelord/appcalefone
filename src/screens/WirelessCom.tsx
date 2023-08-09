import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const WirelessCom = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('MyDevices');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texttitle}>
          Por favor establezca el dispositivo en modo de emparejamiento
        </Text>
        <Text style={styles.textparraph}>
          Eliga una red WiFi de 2.4 Ghz para emparejar e introduzca la
          contraseña correcta
        </Text>
        <Text style={styles.textparraph}>
          Si tu red WiFi de 2.4 Ghz comparten el mismo SSID te recomiendo
          cambiar la configuracion de tu router o probar un modo de
          emparejamiento compatible
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="WiFi - 5Ghz"
          placeholderTextColor={'grey'}
        />
        <TextInput
          style={styles.input}
          placeholder="WiFi - 2Ghz"
          placeholderTextColor={'grey'}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputbottom}
          placeholder="Solicitud de Permiso para Acceder"
          placeholderTextColor={'grey'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.inputbottom}
          placeholder="Por Favor Introduce Contraseña"
          placeholderTextColor={'grey'}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="Presionar"
          onPress={handleButtonPress}
          color="#B5206A"
        />
      </View>
    </SafeAreaView>
  );
};

export default WirelessCom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  texttitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
    marginTop: 40,
  },
  textparraph: {
    textAlign: 'justify', // Justificar el texto
    marginHorizontal: 20, // Margen horizontal para el centrado
    marginRight: 60,
    marginTop: 10,

    fontSize: 15,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 40,
    borderColor: 'grey',
  },
  inputbottom: {
    height: 50,
    margin: 12,
    padding: 10,
    marginHorizontal: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 40,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
