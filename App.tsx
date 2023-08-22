import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {StackNavigator} from '_navigators';

type Props = {};

const App = () => {
  return (
    <>
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
