import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import CustomModal from '../components/CustomModal';
const HomeDevices = () => {
  return (
    <SafeAreaView style= {styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/calefone.jpg')}
        />
      </View>
      <View>
        <Text style={styles.text}>
          Reune aqui los dispositivos que uses con mayor frecuencia
        </Text>
        <View>
          <CustomModal />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default HomeDevices;
