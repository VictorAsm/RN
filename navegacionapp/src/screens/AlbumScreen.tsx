import React, { useContext } from 'react'
import { View,Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumScreen = () => {
    const {logout, authState} = useContext(AuthContext);
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Album Screen</Text>
            {authState.isLoggedIn && <Button title="Log Out" onPress = {logout} />}
        </View>
    )
}
