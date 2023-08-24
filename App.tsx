import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {StackNavigator} from '_navigators';

type Props = {};

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <StackNavigator />
    </>
  );
};

const Main = ({}: Props) => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <App />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Main;
