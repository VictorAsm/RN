import React from 'react'
import { Text, View } from 'react-native'
import { RecipeDetailsInterface } from '../../interfaces/recipeDetails';
import { InfoItem } from './InfoItem';

interface Props {
    receta : RecipeDetailsInterface
}

export const NutritionalInfo = ({receta} : Props) => {

    const {
        vegetarian,
        vegan,
        glutenFree,
        dairyFree,
        veryHealthy,
        cheap,
        veryPopular,
        sustainable,
        lowFodmap,
        } = receta;
    return (
        <View style={{marginVertical: 10, padding: 20, borderWidth: 1}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Datos Curiosos</Text>
            <InfoItem name="Vegetarian" value={vegetarian} />
            <InfoItem name="Vegan" value={vegan} />
            <InfoItem name="Gluten Free" value={glutenFree} />
            <InfoItem name="Dairy Free" value={dairyFree} />
            <InfoItem name="Very Healthy" value={veryHealthy} />
            <InfoItem name="Cheap" value={cheap} />
            <InfoItem name="Very Popular" value={veryPopular} />
            <InfoItem name="Sustainable" value={sustainable} />
            <InfoItem name="Low Fodmap" value={lowFodmap} />
        </View>
    )
}
