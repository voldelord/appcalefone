import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import {NativeStackScreenProps} from '@react-navigation/native-stack';



interface Props extends NativeStackScreenProps<any, any> {}
const NewScenary = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('Scenarys');
  };
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.parraph}>Nombre</Text>
    <TextInput style={styles.input} placeholder="Ingrese Email" />
    <Text style={styles.parraph}>Pais</Text>
    <TextInput style={styles.input} placeholder="Ingrese Email" />
    <Text style={styles.parraph}>Estado</Text>
    <TextInput style={styles.input} placeholder="Ingrese Email" />
    <Text style={styles.parraph}>Localidad</Text>
    <TextInput style={styles.input} placeholder="Ingrese Email" />
    <Text style={styles.parraph}>Direccion</Text>
    <TextInput style={styles.input} placeholder="Ingrese Email" />
    <Text style={styles.parraph}>Zona Postal</Text>
    <TextInput style={styles.input} placeholder="Ingrese Email" />
    <View style={styles.buttonContainer}>
    <CustomButton
          label="Confirmar" 
          onPress={handleButtonPress}
          color="#B5206A"/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: 'white',
      justifyContent: 'center',
     
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 5,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 10,
      },
      parraph: {
        textAlign: 'left',
        marginTop:20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 25,
      },
      buttonContainer: {
        marginTop: 30,
        padding: 30,
      },
})
export default NewScenary
