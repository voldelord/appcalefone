import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const DevicesCom = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('WirelessCom');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texttitle}>
          Por favor establezca la comunicacion con el dispositivo
        </Text>
        <Text style={styles.textparraph}>
          Ejemplo: debe seguir los siguientes pasos
        </Text>
      </View>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={require('../assets/2.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="Siguiente"
          color="#B5206A"
          onPress={handleButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default DevicesCom;

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
    marginBottom: 60,
    fontSize: 15,
  },
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 350,
  },
  buttonContainer: {
    marginTop: 30,
  },
});
