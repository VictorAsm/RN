import React from 'react'
import { ExtendedIngredient } from '../../interfaces/recipeDetails'
import { FlatList } from 'react-native-gesture-handler';
import { IngredientDetail } from './IngredientDetail';
import { View } from 'react-native';

interface Props {
    lista: ExtendedIngredient[];
}

export const IngredientsInfo = ({lista} : Props) => {

    return (
        <View>
            <FlatList 
                data={lista}
                keyExtractor={(item, index) => `${item.id.toString()}${index}`}
                renderItem={({item}) => <IngredientDetail ingredient={item}/>}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
