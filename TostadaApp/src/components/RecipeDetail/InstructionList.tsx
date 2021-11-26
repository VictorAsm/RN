import React from 'react'
import { View, FlatList } from 'react-native'
import { Step } from '../../interfaces/recipeInstructions'
import { InstructionItem } from './InstructionItem'

interface Props {
    steps: Step[]
}

export const InstructionList = ({steps} : Props) => {
    return (
        <View>
            <FlatList 
                data={steps}
                keyExtractor={(item : Step) => item.number.toString()}
                renderItem={({item}) => <InstructionItem step={item} />}
                showsHorizontalScrollIndicator={false}
            />
            
        </View>
    )
}
