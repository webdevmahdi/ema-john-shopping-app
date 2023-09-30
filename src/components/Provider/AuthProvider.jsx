import React, { createContext } from 'react'

export let AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    let user = {
        displayName: 'Mahdi Hasan',
        age: 16
    }

let authInfo = {
    user
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider