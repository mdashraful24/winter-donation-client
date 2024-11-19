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
    // console.log(loading, user)
    // loading data
    useEffect(() => {
        fetch("./donation.json")
            .then(response => response.json())
            .then(data => setData(data))

    }, [])
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


// import { createContext, useEffect, useState } from "react";
// import {
//     createUserWithEmailAndPassword,
//     getAuth,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signOut,
//     updateProfile,
// } from "firebase/auth";
// import app from "../firebase/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//     const [id, setId] = useState(localStorage.getItem("donationId") || null); // Persist `id`

//     console.log(loading, user);

//     // Fetching donation data
//     useEffect(() => {
//         fetch("./donation.json")
//             .then((response) => response.json())
//             .then((data) => setData(data));
//     }, []);

//     // Update local storage when `id` changes
//     useEffect(() => {
//         if (id) {
//             localStorage.setItem("donationId", id);
//         }
//     }, [id]);

//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => {
//             unSubscribe();
//         };
//     }, []);

//     const authInfo = {
//         user,
//         setUser,
//         createNewUser: (email, password) =>
//             createUserWithEmailAndPassword(auth, email, password),
//         logOut: () => signOut(auth),
//         userLogin: (email, password) =>
//             signInWithEmailAndPassword(auth, email, password),
//         loading,
//         updateUserProfiles: (updatedData) =>
//             updateProfile(auth.currentUser, updatedData),
//         data,
//         setId,
//         id,
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
