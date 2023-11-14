import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const Scenary = ({ navigation }: Props) => {
  const handleButtonPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
   
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleButtonPress('NewScenary')}
      >
        <Text style={styles.buttonText}>Añadir Ambiente</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#FF2E79',
    borderStyle: 'dashed',
    padding: 60,
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 5,
    color: '#FF2E79',
    fontSize: 20,
  },
});

export default Scenary;
