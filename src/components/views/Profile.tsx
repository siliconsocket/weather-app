import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {TStackNavigatorProps} from '_types';

type Props = {};

const Profile = ({}: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<TStackNavigatorProps, 'Settings'>>();
  return (
    <View style={styles.container}>
      <Text>Hola Profile</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Settings', {hola: false})}>
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
