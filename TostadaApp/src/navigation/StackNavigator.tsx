import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';
import { DetailsScreen } from '../screen/DetailsScreen';
import { Recipe } from '../interfaces/recipeList';

const Stack = createStackNavigator();

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Recipe;
}

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
    >
      <Stack.Screen name="HomeScreen"     component={HomeScreen} />
      <Stack.Screen name="DetailsScreen"  component={DetailsScreen} />

    </Stack.Navigator>
  );
}