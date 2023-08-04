import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const WelcomeScreen = () => {
  useEffect(() => {});
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 30}}>Hola</Text>
    </View>
  );
};

export default WelcomeScreen;
