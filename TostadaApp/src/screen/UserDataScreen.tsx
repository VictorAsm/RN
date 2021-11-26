import React from 'react'
import { Text, View, Image } from 'react-native';

export const UserDataScreen = () => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{marginTop: 50}}>
                <Image source={ require('./../assets/lisa.jpg') } style={{width: 150, height: 150, borderRadius: 100, overflow: 'hidden', borderWidth: 2, borderColor: 'black'}} />
            </View>
            <View>
                <Text style={{fontSize: 30, color: 'black'}}>Lisa</Text>
            </View>

            <View style={{width: 300, marginTop: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>Nacimiento</Text>
                    <View style={{flex:1}}/>
                    <Text>27 de marzo de 1997</Text>
                </View>
            </View>
        </View>
    )
}
