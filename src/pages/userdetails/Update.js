import React from "react";
import {Link} from 'react-router-dom';
import './Update.css';


const Update = () => {
    function handleChange(){
     <div>hello</div>    }
  return (
    <div>
      
        <h4>Update</h4>

      <div className="update-container"> 

      <form>
      <lable>First Name:  <input type="text" name="firstname" onChange={handleChange} p /></lable><br/><br/>
      <lable>Last Name:   <input type="text" name="lastname" onChange={handleChange} /></lable><br/><br/>
      <lable> Email:  <input type="email" name="email" onChange={handleChange} /></lable><br/><br/>
      <lable> Date of Birth:  <input type="date" name="dateofbirth" onChange={handleChange} /></lable><br/><br/>
        <button><Link to='/userdetails'>Cancel</Link></button>
        <button type="submit">Update</button>
      </form>
      </div> 
    </div>
  );
};

export default Update;
