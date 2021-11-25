import { DefaultTheme, DarkTheme, NavigationContainer, Theme } from '@react-navigation/native';

import React from 'react'
import { Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';

const customTheme: Theme = {
  dark: true,
  colors: {
      ...DarkTheme.colors,
      //background: 'black',
      //primary: string;
      //background: string;
      //card: string;
      //text: string;
      //border: string;
      //notification: string;
  }
}

const App = () => {
  return (
    <NavigationContainer
      theme={ customTheme }
    >
      <Navigator />
    </NavigationContainer>
  )
}

export default App;