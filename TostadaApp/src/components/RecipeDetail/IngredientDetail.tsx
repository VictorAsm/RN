import React from 'react'
import { Text, View } from 'react-native';
import { ExtendedIngredient } from '../../interfaces/recipeDetails';

interface Props{
    ingredient: ExtendedIngredient;
}

export const IngredientDetail = ({ingredient} : Props) => {
    const unitFormat = (unit : string) => {
        return (unit) ? (unit) : 'unit'
    }
    return (
        <View style={{flexDirection: 'row'}}>
            <Text> - {(ingredient.name)[0].toUpperCase() + (ingredient.name).substring(1)}</Text>
            <View style={{flex: 1}}></View>
            <Text>{ingredient.amount} {unitFormat(ingredient.unit)}</Text>
        </View>
    )
}
