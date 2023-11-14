import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    username: 'UsuarioEjemplo',
    email: 'usuario@example.com',
    profileImage: require('../assets/profile.jpg'), // Ruta de la imagen por defecto
   
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil de Usuario</Text>
      <Image source={user.profileImage} style={styles.profileImage} />
      <Text>Nombre de usuario: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      {/* Otras información del usuario */}
      <Button
        title="Editar Perfil"
        onPress={() => navigation.navigate('EditProfile', { user })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default UserProfile;
