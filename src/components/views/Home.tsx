import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {};

const Home = ({}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Hola Home</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Settings')}>
        Ir a settings
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Profile')}>
        Ir a profile
      </Button>
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

export default Home;
