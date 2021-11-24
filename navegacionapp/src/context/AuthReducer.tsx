// Todo se construye con los parametros de entrada
import { AuthState } from "./AuthContext";

type AuthAction = 
    |   { type: 'signIn' }
    |   { type: 'logout' }
    |   { type: 'changeFavIcon', payload: string }
    |   { type: 'changeUsername', payload: string }

// Siempre regresa un estado, este es de tipo authStateA
export const authReducer = (state: AuthState, action: AuthAction) : AuthState => {
    // Aca la idea es que se genere un nuevo estado
    
    switch(action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'changeUsername':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
}