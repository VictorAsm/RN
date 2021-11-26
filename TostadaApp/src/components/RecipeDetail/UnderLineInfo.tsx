import React from 'react'
import { Text, View } from 'react-native'

interface Props {
    title: string;
    value: string;
}

export const UnderLineInfo = ({title, value} : Props) => {
    return (
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{title}:</Text>
            <Text>{value}</Text>
        </View>
    )
}
