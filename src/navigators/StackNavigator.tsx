import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Profile, Settings} from '_views';

type Props = {};

const Stack = createStackNavigator();

const StackNavigator = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
