import React from 'react'
import { Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { useRecipes } from '../hooks/useRecipes';
import { FlatList } from 'react-native-gesture-handler';
import { RecipeCard } from '../components/RecipeCard';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {

    const { isLoading, listRecipes } = useRecipes();

    return (
        <View style={styles.globalMargin}>
            
            <FlatList 
                data={listRecipes}
                renderItem = {({item}) => ( <RecipeCard recipe={item} />)}
                keyExtractor={(item) => item.id.toString()}

                ListHeaderComponent={ () => <HeaderTitle title="Las mejores recetas"/>}
                ItemSeparatorComponent={() => <ItemSeparator /> }
            />

        </View>
    )
}
