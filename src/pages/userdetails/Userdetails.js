import React from 'react';
import {Link} from 'react-router-dom';

const Userdetails = () => {


  return (
    <div>
      here display user details of logged in person// contain update button
      <button><Link to='/update'>Update</Link></button>
    </div>
  )
}

export default Userdetails
