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

const SearchDevice = ({navigation}: Props) => {
  const handleButtonPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style= {styles.container}>
      <View style={styles.containerbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleButtonPress('WirelessCom');
          }}>
          <Image
            style={styles.imagebutton}
            source={require('../assets/11.jpg')}
          />
          <View style={styles.overlay} />
          <View style={styles.overlayText}>
            <Text style={styles.buttonText}>Modo WiFi</Text>
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
            source={require('../assets/11.jpg')}
          />
          <View style={styles.overlay} />
          <View style={styles.overlayText}>
            <Text style={styles.buttonText}>Modo QR</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.containerbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleButtonPress('AddDevices');
          }}>
          <Image
            style={styles.imagebutton}
            source={require('../assets/11.jpg')}
          />
          <View style={styles.overlay} />
          <View style={styles.overlayText}>
            <Text style={styles.buttonText}>Modo Manual</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchDevice;

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      },
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
    marginTop: 25,
  },
  button: {
    position: 'relative',
    
  },
  imagebutton: {
    width: 350,
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Cambia el color de fondo para hacerlo más oscuro
    borderRadius: 20,
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
