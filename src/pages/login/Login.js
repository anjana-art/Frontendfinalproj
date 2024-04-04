import React from 'react';
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import './login.css';
import {auth} from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(){
  const navigate = useNavigate();
   const[authUser, setAuthUser] = useState({
    email: " ",
    password: ""
   });
   const[error, setError] = useState(false);

   const handleChange = (e) => {
    const{name, value} = e.target;
   
    setAuthUser((prev) => {
      return { ...prev , [name] : value};
    });
  };

  function handleSubmit(e){
    e.preventDefault();
    if(authUser.email.length === 0 || authUser.password.length === 0){
      setError(true);
    }
    signInWithEmailAndPassword(auth,authUser.email,authUser.password)
    .then((userCredential) => {
      const user = userCredential.user
      alert(user.email +'logged in' );
      navigate('/shop');

    }).catch((error)=>{
      alert(error);
      console.log(error.code)
    })
   
  }

 



  return (
    <>
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input type='email' onChange={handleChange} placeholder='Email' name='email'  value={authUser.email}/><br/><br/>
        {error? <label>email field should not be empty;</label>: " "}
        <input type='password' onChange={handleChange} placeholder='*******' name='password' value={authUser.password}/><br/><br/>
        {error? <label>Enter the password</label>:" "}
        <button type='submit'>LogIn</button>

        <p>Don't have Account ?<Link to='/ragister'> Ragister here</Link></p>
      </form>
    </div>
    </>
  )
}

export default Login
