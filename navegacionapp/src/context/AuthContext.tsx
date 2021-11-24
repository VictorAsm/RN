import React, { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";

// Definir como luce o que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decir a React como luce y que expone el context
// Aca defino todo lo que quiero que se exporte a los hijos
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: ( iconName: string ) => void;
    changeUsername: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({ children } : any) => {

    // generaEstado devuelve un nuevo estado. Recibe cosas y genera un nuevo estado
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUsername = ( username: string ) => [
        dispatch({type: 'changeUsername', payload: username})
    ]

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}