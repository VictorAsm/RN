import React, { useContext, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Keyboard, Alert } from 'react-native';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyle } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import { RegisterData } from '../interfaces/appInterfaces';

interface Props extends StackScreenProps<any, any>{};

export const RegisterScreen = ({navigation} : Props) => {

    const { signUp, errorMessage, removeError } = useContext(AuthContext)

    const {email, password, name, onChange} = useForm({
        name: '',
        email: '',
        password: ''
    })

    const onRegister = () => {
        Keyboard.dismiss();
        signUp({
            nombre: name,
            correo: email,
            password
        })
    }

    useEffect(() => {
        if(errorMessage.length === 0) return;
        Alert.alert( 'Login Incorrecto', errorMessage, [ { text: 'Ok', onPress: removeError } ]);
    }, [errorMessage])


    return (
        <>           
            <KeyboardAvoidingView
                style={{flex: 1, backgroundColor: '#5856D6'}}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                <View style={loginStyle.formContainer}>
                    {/* Keyboard Avoid View */}
                    <WhiteLogo />
                    
                    <Text style={loginStyle.title}>Registro</Text>

                    <Text style={loginStyle.label}>Nombre:</Text>
                    <TextInput 
                        placeholder="Ingrese su nombre:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[loginStyle.inputField, (Platform.OS === 'ios') && loginStyle.inputFieldIOS]}
                        selectionColor="white"
                        onChangeText={(value) => onChange(value, 'name')}
                        secureTextEntry
                        value={name}
                        onSubmitEditing={onRegister}
                        autoCapitalize="words"
                    />

                    <Text style={loginStyle.label}>Email:</Text>
                    <TextInput 
                        placeholder="Ingrese su email:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[loginStyle.inputField, (Platform.OS === 'ios') && loginStyle.inputFieldIOS]}
                        selectionColor="white"
                        onChangeText={(value) => onChange(value, 'email')}
                        secureTextEntry
                        value={email}
                        onSubmitEditing={onRegister}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={loginStyle.label}>Contraseña:</Text>
                    <TextInput 
                        placeholder="********"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[loginStyle.inputField, (Platform.OS === 'ios') && loginStyle.inputFieldIOS]}
                        selectionColor="white"
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onRegister}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />


                    {/* Boton Login */}
                    <View style={loginStyle.buttonContainer}>
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            style={loginStyle.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyle.buttonText}>Crear Cuenta</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.replace('LoginScreen')}
                        style={loginStyle.buttonReturn}
                        >
                        <Text style={loginStyle.buttonText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        </>
    )
}
