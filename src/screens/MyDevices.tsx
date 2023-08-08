import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const data = [
  {
    id: '1',
    imageUri: require('../assets/1.png'),
    text: 'Panel Calefactor',
  },
  {id: '2', imageUri: require('../assets/2.png'), text: 'Panel Calefactor'},
  {id: '3', imageUri: require('../assets/3.png'), text: 'Panel Calefactor'},
  {id: '4', imageUri: require('../assets/4.png'), text: 'Panel Calefactor'},
  {id: '5', imageUri: require('../assets/5.png'), text: 'Panel Calefactor'},
  {id: '5', imageUri: require('../assets/6.png'), text: 'Panel Calefactor'},
];

const numColumns = 3;

const MyDevices = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.imageUri} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.texttitle}>Añadir Dispositivos</Text>
      </View>
      <View>
        <Text style={styles.textnamedevices}>Calefaccion</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
  image: {
    width: 100,
    height: 150,
  },
  text: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  textcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 80,
    marginTop: 20,
  },
  textnamedevices: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 40,
    marginLeft: 20,
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
});

export default MyDevices;
