import React from 'react'
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import Navigator from './src/navigation/Navigator';

/* const customTheme: Theme = {
  dark: true,
  colors: {
      ...DefaultTheme.colors,
      //background: 'black',
      //primary: string;
      //background: string;
      //card: string;
      //text: string;
      //border: string;
      //notification: string;
  }
}
 */
const App = () => {
  return (
    <AppState>
        <Navigator />
    </AppState>
  )
}

const AppState = ({children} : any) => {
    return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
    )

}

export default App;