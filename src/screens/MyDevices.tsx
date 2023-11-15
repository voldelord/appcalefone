import React, {useState} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const MyDevices = ({navigation}: Props) => {
  const [data, setData] = useState([
    {
      name: 'Dispositivo 1',
      image: require('../assets/1.png'),
    },
    {
      name: 'Dispositivo 2',
      image: require('../assets/2.png'),
    },
  ]);
  const handleButtonPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleButtonPress('Modes')} // Cambia 'OtraPantalla' al nombre de la pantalla deseada
              >
                <Image source={item.image} style={styles.image} />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 50,
    padding: 30,
  },
  image: {
    width: 40,
    height: 100,
    marginBottom: 10,
  },
});

export default MyDevices;
