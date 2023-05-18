import  { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    // const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const handleGoogleProvider =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // const handleGithubProvider =() =>{
    //     setLoading(true)
    //     return signInWithPopup(auth, githubProvider)
    // }
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfileUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect (() =>{
      const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
          setLoading(false)
         
            setUser(loggedUser)
          })
          return () =>{
            unsubscribe()
          }
    },[loading])
    const userInfo = {
        user,
        handleGoogleProvider,
        logout,
        createUser,
        loginUser,
        updateProfileUser,
        loading
        
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;