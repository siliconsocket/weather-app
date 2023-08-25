import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BOTTOM_TAB_NAV, BOTTOM_TAB_NAV_LABEL} from '_navigators';
import {TBottomTabNavigatorProps} from '_types';
import StackNavigator from './StackNavigator';

type Props = {};

const Tab = createBottomTabNavigator<TBottomTabNavigatorProps>();

const BottomTabNavigator = ({}: Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={StackNavigator}
        name={BOTTOM_TAB_NAV.HOME_NAVIGATOR}
        options={{title: BOTTOM_TAB_NAV_LABEL[BOTTOM_TAB_NAV.HOME_NAVIGATOR]}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
