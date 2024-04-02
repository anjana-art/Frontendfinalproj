import React , {useEffect, useState} from 'react';
import {auth} from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        });

    },[]);
  return (
        <div>{authUser ? <p>Sign up</p> : <p>logged in</p>} </div>
  )
}


export default AuthDetails
