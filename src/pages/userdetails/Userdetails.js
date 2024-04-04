import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../contexts/UserContext";
import { app } from "../../firebaseConfig";
import { doc, collection, getDocs } from "firebase/firestore";
import "../userdetails/userdetail.css";
import Update from "./Update";
import NavShopUser from "../shop/NavShopUser";

export default function Userdetails() {
  const [usersdetails, setUsersdetails] = useState([]);
  const currentUser = useContext(UserContext);

  const usersCollectionRef = collection(db, "user-details");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsersdetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    <NavShopUser/>
      <h2>Profile Page</h2>

      {usersdetails.map((userdetail) => {
        if (currentUser.email && currentUser.email === userdetail.email)
          return (
            <>
              <div key={userdetail.id} className="profile">
                <div className="divprofile">
                  First Name:<b>{userdetail.firstname} </b>
                </div>
                <div className="divprofile">
                  Last Name:<b>{userdetail.lastname}</b>
                </div>
                <div className="divprofile">
                  Email:<b> {userdetail.email}</b>
                </div>
                <div className="divprofile">
                  Date of Birth: <b>{userdetail.dateofbirth}</b>
                </div>
              </div>
                 
              <button>
                <Link to="/update">UPDATE</Link>
              </button>
            </>
          );
      })}
    </>
  );
}
