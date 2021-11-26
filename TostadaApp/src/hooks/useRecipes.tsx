import { useEffect, useState } from "react";
import { Recipe, RecipesResponse } from "../interfaces/recipeList";
import movieBD from '../api/spoonacularDB';

interface MoviesState { 
    listRecipes : Recipe[];
}

export const useRecipes = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [recipeList, setMoviesState] = useState<MoviesState>({
        listRecipes: [],
    });

    const getRecipeList = async () => {
        const listRecipesPromise = movieBD.get<RecipesResponse>('/recipes/complexSearch');

        const response =  await Promise.all([
            listRecipesPromise, 
        ]);

        setMoviesState({
            listRecipes: response[0].data.results,
        })

        setIsLoading(false);

    }

    useEffect(() => {
        getRecipeList();
    }, [])

    return {
        ...recipeList,
        isLoading,
    }    
}
