import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TStackNavigatorProps} from '_types';
import {Home, Profile, Settings} from '_views';

const Stack = createStackNavigator<TStackNavigatorProps>();

const StackNavigator = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Profile} name="Profile" />
      <Stack.Screen component={Settings} name="Settings" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
