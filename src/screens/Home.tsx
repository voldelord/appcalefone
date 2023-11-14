import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';


interface Props extends NativeStackScreenProps<any, any> {}
const Home = ({navigation}: Props) => {
    const handleButtonPress = () => {
        navigation.navigate('NewHome');
      };
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        backgroundColor:'#FFEDF3',
        borderRadius: 5,
        borderColor: '#FF2E79',
        borderStyle: 'dashed',
        padding: 60,
        marginHorizontal: 10,
        alignItems: 'center',
      }} 
      onPress={handleButtonPress} 
    >
      <Icon name="plus" size={20} color="white" />
      <Text style={{ marginTop: 5, color: '#FF2E79' }}>No Tienes una Casa Registrada</Text>
      <Text style={{ marginTop: 5, color: '#FF2E79' }}>Agrega una Casa</Text>
    </TouchableOpacity>
  );
};

export default Home;
