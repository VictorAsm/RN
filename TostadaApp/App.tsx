import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
