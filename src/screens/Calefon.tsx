import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const Calefon = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('CalefonRange');
  };

  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>Modos De Control</Text>
        <Image style={styles.image} source={require('../assets/8.png')} />
      </View>

      <View style={styles.containerbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleButtonPress();
          }}>
          <Image
            style={styles.imagebutton}
            source={require('../assets/9.jpg')}
          />
          <View style={styles.overlay} />
          <View style={styles.overlayText}>
            <Text style={styles.buttonText}>Fuera de casa</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.containerbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleButtonPress();
          }}>
          <Image
            style={styles.imagebutton}
            source={require('../assets/10.jpg')}
          />
          <View style={styles.overlay} />
          <View style={styles.overlayText}>
            <Text style={styles.buttonText}>En Casa</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Calefon;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    marginRight: 10,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
  containerbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    position: 'relative',
    borderWidth: 0.5,
  },
  imagebutton: {
    width: 350,
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cambia el color de fondo para hacerlo más oscuro
    borderRadius: 10,
  },
  overlayText: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
