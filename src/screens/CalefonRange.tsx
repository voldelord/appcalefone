import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RadialSlider} from 'react-native-radial-slider';
import Toggle from 'react-native-toggle-element';

const Calefone = () => {
  const [temperature, settemperature] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <RadialSlider
          value={temperature}
          min={0}
          max={20}
          onChange={settemperature}
        />
      </View>
      <View style={styles.container}>
        <Toggle
          value={toggleValue}
          onPress={newState => setToggleValue(newState)}
          leftTitle="Right"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
});

export default Calefone;
