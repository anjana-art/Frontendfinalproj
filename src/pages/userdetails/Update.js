import React, { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Update.css";
import { collection, doc, updateDoc, getDocs } from "firebase/firestore";
import { UserContext } from "../../contexts/UserContext";
import { db, auth } from "../../firebaseConfig";

const Update = () => {
  const[newDetail, setNewDetail] = useState({
    firstname: " ",
    lastname: " ",
    email: " ",
    dateofbirth: ""
   });
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
  const handleChange = (e) => {
    const{name, value} = e.target;
    setNewDetail((prev) => {
      return { ...prev , [name] : value};
    });
  };

  //const updateUser = async(){
   // const }


  return (
    <div>
      <h4>Update</h4>

      <div className="update-container">
        <form className="editprofile" >
          
            First Name:
            <input type="text" name="firstname" onChange={handleChange} value={newDetail.firstname} />
          <br />
          <br />
          
            Last Name:
            <input type="text" name="lastname" onChange={handleChange}  value={newDetail.lastname}/>
          <br />
          <br />
          
            
            Email: <input type="email" name="email" onChange={handleChange}  value={newDetail.email}/>
          <br />
          <br />
          
            
            Date of Birth:
            <input type="date" name="dateofbirth" onChange={handleChange}  value={newDetail.dateofbirth}/>
          <br />
          <br />
          <button>
            <Link to="/userdetails">Cancel</Link>
          </button>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};
export default Update;
