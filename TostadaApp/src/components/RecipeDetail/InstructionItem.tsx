import React from 'react'
import { Step } from '../../interfaces/recipeInstructions'
import { Text, View } from 'react-native';

interface Props {
    step : Step
}

export const InstructionItem = ({step} : Props) => {
    return (
        <View>
            <Text><Text style={{fontSize: 15, fontWeight: 'bold'}}>{step.number} - </Text> {step.step}</Text>
        </View>
    )
}
