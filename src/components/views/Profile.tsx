import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {HOME_NAVIGATOR} from 'src/navigators/navNames';
import {TStackNavigatorProps} from '_types';

type Props = {};

const Profile = ({}: Props) => {
  const navigation = useNavigation<StackNavigationProp<TStackNavigatorProps>>();
  return (
    <View style={styles.container}>
      <Text>Hola Profile</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate(HOME_NAVIGATOR.SETTINGS)}>
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
