import React from 'react';
import {useState} from "react";
import {Link} from 'react-router-dom';
import './login.css';

function Login(){
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
   
  }



  return (
    <>
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input type='email' onChange={handleChange} placeholder='Email' name='email' /><br/><br/>
        <input type='password' onChange={handleChange} placeholder='*******' name='password'/><br/><br/>
        <button type='submit'>LogIn</button>

        <p>Don't have Account ?<Link to='/ragister'> Ragister here</Link></p>
      </form>
    </div>
    </>
  )
}

export default Login
