import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Recipe } from '../interfaces/recipeList';

const windowWidth = Dimensions.get('window').width

interface Props {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe } : Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", recipe)}>
            <View style={styles.cardContainer}>
                <Image source={{uri: recipe.image}} style={{width: 75, height: 75, flex:2, borderRadius: 5}} />
                <Text style={{...styles.name, }}> { recipe.title } </Text>
                <Text>{recipe.id}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'left', 
        flex:8,
        color: 'black'
    },
});