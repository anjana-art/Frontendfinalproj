import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Ragister() {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confemail: "",
    pswrd: "",
    confpswrd: "",
    dateofbirth: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + ",,,,," + value);

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submit = async () => {
    
    const {firstname, lastname, email, confemail, pswrd,confpswrd,dateofbirth, } = details;
    
     //   await addDoc(dbref, {FirstName: firstname, LastName: lastname, Email : email, ConfirmEmail : confemail, Password: pswrd, ConfirmPassword: confpswrd, DateOfBirth: dateofbirth})
       
  
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h2>Sign Up</h2>
        </div>
        <div>
          <form>
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
              name="pswrd"
              value={details.pswrd}
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
            <button onClick={submit}>Create Account</button>
            <p>
              Already have an Account?<Link to="/Login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Ragister;
