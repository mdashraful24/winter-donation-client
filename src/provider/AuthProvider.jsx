import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [id, setId] = useState(null);

    // Data load
    useEffect(() => {
        fetch("./donation.json")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    // Create new user, login, log out, google sign in, update profile
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfiles = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // Auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfiles,
        data,
        setId,
        id,
        handleGoogleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
