import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

const Settings = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Hola Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Settings;
