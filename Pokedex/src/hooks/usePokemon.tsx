import { useState, useEffect } from 'react';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';
export const usePokemon = ( id: string ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>();

    const loadPokemon = async () => {
        const resp = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon( resp.data );
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon
    }
}