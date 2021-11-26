import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    name: string;
    value: boolean;
}
export const InfoItem = ({name, value} : Props) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text>{name}</Text>
            <View style={{flex: 1}}></View>
            {
                value 
                ? <Icon name="checkmark-circle-outline" size={20} color="green"/>
                : <Icon name="close-circle-outline" size={20} color="red"/>
            }
        </View>
    )
}
