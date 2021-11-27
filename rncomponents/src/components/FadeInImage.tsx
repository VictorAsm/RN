import React, { useContext, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style} : Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const {theme:{colors, dividerColor, dark}} = useContext(ThemeContext);

    const finishLoading = () => {
        setIsLoading(false)
        fadeIn();
    }
    
    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            {isLoading && <ActivityIndicator style={{position: 'absolute'}} size={30} color={colors.primary} />}
            <Animated.Image 
                source={{uri}}
                onLoadEnd={fadeIn}
                style={{
                    ...style as any,
                    // width: '100%',
                    // height: 400,
                    opacity
                }}
            />
        </View>
    )
}
