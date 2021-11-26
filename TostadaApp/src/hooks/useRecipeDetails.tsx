import { useEffect, useState } from "react";
import movieBD from '../api/spoonacularDB';
import { RecipeDetailsInterface } from "../interfaces/recipeDetails";
import { RecipeInstructionsInterface, Step } from '../interfaces/recipeInstructions';

interface RecipeDetails { 
    isLoading: boolean;
    recipeFull?: RecipeDetailsInterface,
    instructionsFull?: Step[]
}

export const useRecipeDetails = (recipeId: number) => {
    const [isLoading, setIsLoading] = useState(true);

    const [recipeDetails, setMoviesState] = useState<RecipeDetails>({
        isLoading: true,
        recipeFull: undefined,
        instructionsFull: undefined
    });

    const getRecipeList = async () => {
        const recipeDetailPromise = await movieBD.get<RecipeDetailsInterface>(`/recipes/${recipeId}/information`);
        const recipeInstructionPromise = await movieBD.get<RecipeInstructionsInterface>(`/recipes/${recipeId}/analyzedInstructions`);

        setMoviesState({
            isLoading: false,

            recipeFull: recipeDetailPromise.data,

            instructionsFull: recipeInstructionPromise.data.steps
        })

        setIsLoading(false);

    }

    useEffect(() => {
        getRecipeList();
    }, [])

    return {
        ...recipeDetails,
        isLoading,
    }    
}
