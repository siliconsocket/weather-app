import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {};

const Profile = ({}: Props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Hola Profile</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Settings')}>
        Ir a settings
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

export default Profile;
