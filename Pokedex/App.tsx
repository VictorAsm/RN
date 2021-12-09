import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigator } from './src/navigator/Tab1';
import { Tabs } from './src/navigator/Tabs';
const App = () => {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  )
}

export default App;