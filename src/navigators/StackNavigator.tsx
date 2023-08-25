import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HOME_NAVIGATOR, HOME_NAVIGATOR_LABEL} from '_navigators';
import {TStackNavigatorProps} from '_types';
import {Main, Profile, Settings} from '_views';

const Stack = createStackNavigator<TStackNavigatorProps>();

const StackNavigator = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={Main}
        name={HOME_NAVIGATOR.MAIN}
        options={{title: HOME_NAVIGATOR_LABEL[HOME_NAVIGATOR.SETTINGS]}}
      />
      <Stack.Screen component={Profile} name={HOME_NAVIGATOR.PROFILE} />
      <Stack.Screen component={Settings} name={HOME_NAVIGATOR.SETTINGS} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
