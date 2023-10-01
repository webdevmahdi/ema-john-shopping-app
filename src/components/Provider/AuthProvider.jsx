import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

let auth = getAuth(app);
export let AuthContext = createContext(null);

const AuthProvider = ({children}) => {
let [user, setUser] = useState(null);

let createUser = (emailAccount, password) => {
    return createUserWithEmailAndPassword(auth, emailAccount, password);
}

let signInUser = (emailAccount, password) => {
    return signInWithEmailAndPassword(auth, emailAccount, password)
}

let signOutUser = () =>{
    return signOut(auth);
}

let authInfo = {
    user,
    createUser,
    signInUser
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider