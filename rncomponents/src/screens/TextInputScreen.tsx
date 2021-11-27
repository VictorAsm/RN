import React, { useContext, useState } from 'react'
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Platform , ScrollView, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    const {theme:{colors}} = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Text Inputs" />

                        <TextInput 
                            style={{...stylesScreen.inputStyle, color: colors.primary, borderColor: colors.text}}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                        />

                        <TextInput 
                            style={{...stylesScreen.inputStyle, color: colors.primary, borderColor: colors.text}}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Subscribirse</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange( value , 'isSubscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput 
                            style={{...stylesScreen.inputStyle, color: colors.primary, borderColor: colors.text}}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su telefono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />

                        <View style={{height: 100}}/>
                    </View>


                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchText : {
        fontSize: 25
    }
})