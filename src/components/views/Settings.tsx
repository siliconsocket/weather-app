import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

const Settings = ({}: Props) => {
  const route = useRoute();
  const params = route?.params;
  return (
    <View style={styles.container}>
      <Text>{`Hola Settings ${params?.hola}`}</Text>
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
