import React, {useState} from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const ProfileEdit = ({route, navigation}) => {
  const [editedUser, setEditedUser] = useState(route.params.user);

  const handleSave = () => {
    console.log('Información del usuario editada:', editedUser);
    navigation.goBack();
  };
  const handleButtonPress = () => {
    navigation.navigate('Home'); // Cambia el nombre a 'HomeDevices'
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Editar Perfil</Text>
      <Image source={editedUser.profileImage} style={styles.profileImage} />

      <TextInput
        style={styles.input}
        placeholder="Nuevo nombre de usuario"
        value={editedUser.username}
        onChangeText={text => setEditedUser({...editedUser, username: text})}
      />

      <TextInput
        style={styles.input}
        placeholder="Nuevo nombre de usuario"
        value={editedUser.username}
        onChangeText={text => setEditedUser({...editedUser, username: text})}
      />

      <TextInput
        style={styles.input}
        placeholder="Nuevo email"
        value={editedUser.email}
        onChangeText={text => setEditedUser({...editedUser, email: text})}
      />

      <TextInput
        style={styles.input}
        placeholder="Nuevo nombre de usuario"
        value={editedUser.username}
        onChangeText={text => setEditedUser({...editedUser, username: text})}
      />

      <TextInput
        style={styles.input}
        placeholder="Nuevo email"
        value={editedUser.email}
        onChangeText={text => setEditedUser({...editedUser, email: text})}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          label="Guardar Cambios"
          onPress={handleButtonPress}
          color="#B5206A"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 30,
  },
});

export default ProfileEdit;
