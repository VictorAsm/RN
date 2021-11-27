import React, { useContext, useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const {opacity, position, startMovingPosition, fadeIn, fadeOut} = useAnimation();
    const {theme:{colors}} = useContext(ThemeContext);

    return (
        <View style={ styles.container }>
            <Animated.View style={{ ...styles.purpleBox, backgroundColor: colors.primary, opacity, marginBottom: 20, transform: [{
                translateY: position
            }] }} />
            <Button 
                title="FadeIn"
                color={colors.primary}
                onPress = {() => {fadeIn(); startMovingPosition(100)}}
            />
            <Button 
                title="FadeOut"
                color={colors.primary}
                onPress = {fadeOut}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
})