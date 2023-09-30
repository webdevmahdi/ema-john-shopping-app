import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';

let auth = getAuth(app);
export let AuthContext = createContext(null);

const AuthProvider = ({children}) => {
let [user, setUser] = useState(null);

let signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

let authInfo = {
    user,
    signUp
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider