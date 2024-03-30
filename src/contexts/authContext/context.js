import React , {useEffect, useState} from "react";
import { auth} form '../../firebase/firebase';

const AuthContext = React.createContext();


export function AuthProvider({childern}){
     const[currentUser, setCurrentUser] = useState(null);
     const[userLoggedIn, setUserLoggedIn] = useState(false);
     const[loading, setLoading] = useState(true);


     useEffect(()=>{

     },[])
}