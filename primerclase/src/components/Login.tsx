import React, { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

// Estado inicial
const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

// Creamos un tipo
// Define un tipo de accion que va a tener
type LoginPayload = {
    username: string
    nombre: string
}

type AuthAction = 
   | {type: 'logout'}
   | {type: 'login', payload: LoginPayload}

// Reducer: Es una funcion
// Action debe estar definida en algun lugar
const authReducer = (state : AuthState, action: AuthAction ) : AuthState => {
    // La funcion debe retornar siempre algun tipo de estado igual al initial state
    // El state nunca debe de mutar

    switch(action.type){
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
            
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username
            }
        default:
            return state;
    }

    // Auth reducer debe devolver algo del estilo AuthState (En este caso)

}


export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)
    // Estado inicial?

    // Si se le pone una dependencia en el arreglo, cuando eso cambia se actualiza el effect
    useEffect(() => {
        setTimeout(() => {
            dispatch({type:'logout'})
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                nombre: 'Raphiel',
                username: 'Raphiel'
            }})
    }

    const logout = () => {
        dispatch({type:'logout'});
    }

    if(validando){
        return (
            <>
                <h3>Login</h3>   

                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>

            <h3>Login</h3>
            {
                (token)
                    ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>

            }

            {
                (token)
                    ? <button className="btn btn-danger" onClick = { logout }>Log out</button>
                    : <button className="btn btn-primary" onClick = { login }>Login</button>

            }

        </>
    )
}
