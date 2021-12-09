import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const {simplePokemonList, isLoading, loadPokemons} = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View style={{...styles.globalMargin, alignItems: 'center'}}>
                <FlatList 
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}

                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20
                        }}>Pokedex</Text>
                    )}
                    renderItem={( {item} ) => <PokemonCard pokemon={item} />}
                    
                    // infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={(
                        <ActivityIndicator 
                            style={{height: 100}} 
                            size={20}
                            color="grey"
                        />
                    )}
                />
            </View>
        </>
    )
}
