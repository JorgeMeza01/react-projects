// Definir como luce, que informacion tendre aqui

import React, { createContext, useReducer } from "react"


export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}


// Lo usaremos para decirle a react como luce y que expone el context

export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
}


//Craer el contextp
export const AuthContext = createContext( {} as AuthContextProps );



//Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {

    const [ authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type:'signIn' });
    } 
    return (
        <AuthContext.Provider value={{
            authState,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}


// import React from 'react'
import { authReducer } from './authReducer';

// export const AuthContext = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }
