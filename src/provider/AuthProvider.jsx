import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out
    const signOutUser = () => {
        return signOut(auth);
    }

    // Update User
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user', currentUser);
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;