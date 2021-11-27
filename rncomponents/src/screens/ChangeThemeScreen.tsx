import React, { useContext } from 'react'
import { ImageBackgroundBase, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme} = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme" />

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: '#5856D6',
                        justifyContent: 'center', 
                        width: 150, 
                        height: 50,  
                        borderRadius: 20
                    }}
                    onPress={setLightTheme}
                    >
                <Text style={{
                    color: 'white', 
                    textAlign: 'center', 
                    fontSize: 22}}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: '#5856D6',
                        justifyContent: 'center', 
                        width: 150, 
                        height: 50,  
                        borderRadius: 20
                    }}
                    onPress={setDarkTheme}
                    >
                    <Text style={{
                        color: 'white', 
                        textAlign: 'center', 
                        fontSize: 22}}>Dark</Text>
                </TouchableOpacity> 


            </View>
        </View>
    )
}
