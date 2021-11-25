import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets()

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log("Terminamos");
            setRefreshing(false)
            setData("Hola Mundo");
        }, 3500)
    }

    return (
        <SafeAreaView style={{marginTop: refreshing ? top : 0}}>
            <ScrollView
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        onRefresh={ onRefresh }
                        progressViewOffset={10}
                        progressBackgroundColor="#5856D6"
                        colors = { ["white", "red", "orange"]}
                    />
                }
            >
                <View style={styles.globalMargin}>
                    <HeaderTitle title="Pull To Refresh"/>

                    { data && <HeaderTitle title={data}/>}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
