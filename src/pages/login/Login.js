import React from 'react';
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import './login.css';
import {auth} from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(){
  const navigate = useNavigate();
   const[user, setUsers] = useState({
    email: " ",
    password: ""
   });

   const handleChange = (e) => {
    const{name, value} = e.target;
   
    setUsers((prev) => {
      return { ...prev , [name] : value};
    });
  };

  function handleSubmit(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth,user.email, user.password)
    .then((user) => {
      alert('logged in');
      navigate('/shop');

    }).catch((error)=>{
      alert(error);
    })
   
  }



  return (
    <>
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input type='email' onChange={handleChange} placeholder='Email' name='email'  value={user.email}/><br/><br/>
        <input type='password' onChange={handleChange} placeholder='*******' name='password' value={user.password}/><br/><br/>
        <button type='submit'>LogIn</button>

        <p>Don't have Account ?<Link to='/ragister'> Ragister here</Link></p>
      </form>
    </div>
    </>
  )
}

export default Login
