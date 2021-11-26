import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserDataScreen } from '../screen/UserDataScreen';
import { StackNavigator } from './StackNavigator';
import React from 'react';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="StackNavigator"  component={StackNavigator} />
      <Drawer.Screen name="UserDataScreen"  component={UserDataScreen} />
    </Drawer.Navigator>
  );
}