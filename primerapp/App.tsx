import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';


export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TareaScreen/>
    </SafeAreaView>
  )
}
