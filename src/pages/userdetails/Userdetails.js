import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { collection, doc,query, getDocs,where } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';



const Userdetails = () => {
  const usersRef = collection(db, "user-details");
  const q = query(usersRef, where('uid', '==', 'userID'), where('config1', '!=', false));





  const getUsers = async () => {
    const userDocs = await getDocs(q);
    console.log(userDocs);
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div>
      here display user details of logged in person// contain update button
      <button><Link to='/update'>Update</Link></button>
    </div>
  )
}

export default Userdetails
