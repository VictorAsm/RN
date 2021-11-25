import React from 'react'
import { View, Alert, Button } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {
    
    const showAlert = () => {
         Alert.alert(
            "Titulo",
            "Mensaje de alerta",
            [
                { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "destructive" },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],

            // Con esto se puede hacer click fuera de la alerta y se cierra. No es recomendable usarlo
            {
                cancelable: true,
                onDismiss: () => console.log("onDismiss")
            }
        );
    }
   
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />

            <Button 
                title="Mostrar Alerta"
                onPress={showAlert}
            />
        </View>
    )
}
