import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Ragister from './pages/ragister/Ragister';
import Login from './pages/login/Login';
import Shop from './pages/shop/Shop';
import ShopContextProvider, { ShopContext } from './contexts/ShopContext';
import Cart from './pages/cart/Cart';
import ShopUserLogged from './pages/shop/ShopUserLogged';
import Update from "./pages/userdetails/Update";
import Userdetails from './pages/userdetails/Userdetails';


function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop' element={<ShopUserLogged/>}/>
        <Route path='/ragister' element={<Ragister/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/userdetails' element={<Userdetails/>}/>
   


      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
