import React from 'react'
import { View, StyleSheet, Text, Dimensions, useWindowDimensions } from 'react-native';

// const {width, height} = Dimensions.get('window')

export const DimensionesScreen = () => {

    const {width, height} = useWindowDimensions();
    return (
        <View>
            <View style={{...styles.container, width: width*2}}>
                <View style={styles.cajaMorada}/>
                <View style={styles.cadaNaranja}/>
            </View>
            <Text style={styles.title}>W: { width }, H: { height } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor:'#5856D6',
        width: '50%',
        height: '50%'
    },
    cadaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title:{
        fontSize: 30,
        textAlign: 'center'
    }
})
