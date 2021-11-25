import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMoviesDetails';
import { MovieDeatils } from '../components/MovieDeatils';
import { useNavigation } from '@react-navigation/core';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { route, navigation} : Props ) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    // Cuando tenemos que mostrar algo en pantalla y eso debe cambiar -> useState, useReducer, useContext
    
    const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image 
                        source={{uri}}
                        style={styles.posterImage}
                        />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

                {   isLoading 
                        ? <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
                        : <MovieDeatils movieFull={movieFull!} cast={cast}/>
                }

                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.pop()}>
                    <Icon
                        color="white"
                        name="arrow-back-outline"
                        size={60}
                    />

                </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageBorder: {
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        flex: 1,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 50,

    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 18
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    }
})