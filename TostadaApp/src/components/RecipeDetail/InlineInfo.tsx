import React from 'react'
import { Text, View } from 'react-native'

interface Props {
    title: string;
    value: any;
}

export const InlineInfo = ({title, value} : Props) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{title}:</Text>
            <View style={{flex:1}}/>
            <Text>{value}</Text>
        </View>
    )
}
