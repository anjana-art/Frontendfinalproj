import React , {useEffect, useState} from 'react';
import {auth} from '../../firebaseConfig';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import {Link} from 'react-router-dom';


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

        return()=> {
            listen();
        }

    },[]);

    const userSignOut = () =>{
        signOut(auth).then(()=>{
            console.log('loged out successfully.')
        }).catch(error => console.log(error))
    }


  return (
        <div>{authUser ?<p> <button onClick={userSignOut}><Link to='/'>Logout</Link></button> </p>: <p><button><Link to='/login'>LogIn</Link></button> </p>}</div>
  )
}


export default AuthDetails
