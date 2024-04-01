import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const UserLogContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Ovserbing user', currentUser)
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, createUser, singInUser, logOut };

    return (
        <UserLogContext.Provider value={authInfo}>
            {children}
        </UserLogContext.Provider>
    );
};

export default AuthProvider;