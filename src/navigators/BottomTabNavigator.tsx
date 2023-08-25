import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {ICON} from '_icons';
import {BOTTOM_TAB_NAV, BOTTOM_TAB_NAV_LABEL} from '_navigators';
import {TBottomTabNavigatorProps} from '_types';
import {SVGRIcon} from '_utils';
import StackNavigator from './StackNavigator';

function CustomTabBar({state, descriptors, navigation}) {
  const renderIcon = (routeName: string, isFocused = false) => {
    const fillColor = isFocused ? 'red' : 'blue';
    switch (routeName) {
      case BOTTOM_TAB_NAV.HOME_NAVIGATOR:
      default:
        return <SVGRIcon fill={fillColor} iconName={ICON.HOME} />;
    }
  };
  return (
    <View style={styles.customTabBar}>
      {state.routes.map((route: Route<BOTTOM_TAB_NAV>, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={`tab-${route.name}`}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            activeOpacity={0.8}
            style={styles.customTab}
            testID={options.tabBarTestID}
            onPress={onPress}>
            {renderIcon(route.name, isFocused)}
            <Text numberOfLines={1}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator<TBottomTabNavigatorProps>();

const BottomTabNavigator = ({}) => {
  return (
    <Tab.Navigator tabBar={CustomTabBar}>
      <Tab.Screen
        component={StackNavigator}
        name={BOTTOM_TAB_NAV.HOME_NAVIGATOR}
        options={{title: BOTTOM_TAB_NAV_LABEL[BOTTOM_TAB_NAV.HOME_NAVIGATOR]}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  customTabBar: {
    flexDirection: 'row',
  },
  customTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 88,
  },
});
