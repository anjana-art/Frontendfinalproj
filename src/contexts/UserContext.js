import React, {useState, useEffect} from "react";
import {app, auth} from '../firebaseConfig';


export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const[currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setCurrentUser(user);
        });
    },[]);
  return <UserContext.Provider value={currentUser}>
    {children}
  </UserContext.Provider>;
};
