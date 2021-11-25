import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

// Type cuando se que no serán extendidos
// Interface cuando se que será extendido
export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="HomeScreen"       component={HomeScreen} />
      <Stack.Screen name="DetailScreen"     component={DetailScreen} />
    </Stack.Navigator>
  );
}