import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
}

export const HeaderTitleSecond = ({title} : Props) => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={{marginTop: top + 20, marginBottom: 15}}>
            <Text style={styles.subTitle}>{ title }</Text>
        </View>
    )
    
}
