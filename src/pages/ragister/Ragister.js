import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/app";
import { db } from "../../firebaseConfig"; //to use firestore database , or to have access
import { addDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import AuthDetails from "../login/AuthDetails";

function Ragister() {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confemail: "",
    password: "",
    confpswrd: "",
    dateofbirth: "",
  });
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const usersCollectionRef = collection(db, "user-details");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addUser = async () => {
    const {
      firstname,
      lastname,
      email,
      confemail,
      password,
      confpswrd,
      dateofbirth,
    } = details;
    await addDoc(usersCollectionRef, {
      id: uuidv4(),
      firstname,
      lastname,
      email,
      confemail,
      password,
      confpswrd,
      dateofbirth,
    });
  };

  const submitHandeler = async (e) => {
    e.preventDefault();
    if (details) {
      const {
        firstname,
        lastname,
        email,
        confemail,
        password,
        confpswrd,
        dateofbirth,
      } = details;
      if (firstname === " " || lastname === " " || email === " " || confemail === " " || password === " " || confpswrd === " " || dateofbirth === " ") {
        setErrorMsg("Fill all Fields");
        return;
      }
      setErrorMsg("");


      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        await addDoc(usersCollectionRef, {
          id: uuidv4(),
          firstname,
          lastname,
          email,
          confemail,
          password,
          confpswrd,
          dateofbirth,
        });
        navigate('/shop');
      } catch (error) {
        setErrorMsg(error.message)
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h2>Sign Up</h2>
        </div>
        <div>
          <form onSubmit={submitHandeler}>
            First Name:
            <input
              type="text"
              placeholder="FirstName"
              name="firstname"
              value={details.firstname}
              onChange={handleChange}
            ></input>
            <br /> <br />
            Last Name:
            <input
              type="text"
              placeholder="LastName"
              name="lastname"
              value={details.lastname}
              onChange={handleChange}
            ></input>
            <br /> <br />
            Email:
            <input
              type="email"
              placeholder="Email@gmail.com"
              name="email"
              value={details.email}
              onChange={handleChange}
            ></input>
            <br /> <br />
            Confirm Email:
            <input
              type="email"
              placeholder="Email@gmail.com"
              name="confemail"
              value={details.confemail}
              onChange={handleChange}
            ></input>
            <br /> <br />
            Password:{" "}
            <input
              type="password"
              placeholder="password"
              name="password"
              value={details.password}
              onChange={handleChange}
            ></input>
            <br /> <br />
            Confirm Password:{" "}
            <input
              type="password"
              placeholder="confirm password"
              name="confpswrd"
              value={details.confpswrd}
              onChange={handleChange}
            ></input>
            <br /> <br />
            Date of Birth:
            <input
              type="date"
              placeholder="date of birth"
              name="dateofbirth"
              value={details.dateofbirth}
              onChange={handleChange}
            ></input>
            <br /> <br />
            <button>Cancel</button>
            <button type="submit">Create Account</button>
            <p>
              Already have an Account?<Link to="/Login">Login here</Link>
            </p>
          </form>
        </div>
        <AuthDetails />
      </div>
    </>
  );
}

export default Ragister;
