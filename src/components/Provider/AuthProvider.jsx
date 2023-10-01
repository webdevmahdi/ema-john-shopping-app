import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

let auth = getAuth(app);
export let AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    let createUser = (emailAccount, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, emailAccount, password);
    }

    let signInUser = (emailAccount, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, emailAccount, password)
    }

    let signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        // stop obserbing
        return () => {
            return unsubscribe();
        }
    }, [])

    let authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider