import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log("Tab1Screen");
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon iconName="airplane-outline"            />
                <TouchableIcon iconName="attach-outline"              />
                <TouchableIcon iconName="bonfire-outline"             />
                <TouchableIcon iconName="calculator-outline"          />
                <TouchableIcon iconName="chatbubble-ellipses-outline" />
                <TouchableIcon iconName="images-outline"              />
                <TouchableIcon iconName="leaf-outline"                />
            </Text>
        </View>
    )
}
