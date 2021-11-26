import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

interface Props {
    uri: string;
}

export const ImageComponent = ({uri} : Props) => {
    return (
        <>
            <View style={stylesDetail.imageContainer}>
                <View style={stylesDetail.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={stylesDetail.posterImage} />
                </View>
            </View>
            <Text>Las imagenes son meramente ilustrativas. Cualquier parecido con la realidad es pura coincidencia</Text>
        </>
    )
}

const stylesDetail = StyleSheet.create({
    imageBorder: {
        borderRadius: 5,
        flex: 1,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: 200,
    },
    posterImage: {
        flex: 1,
    },
})