import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ragister from "./pages/ragister/Ragister";
import Login from "./pages/login/Login";
import Shop from "./pages/shop/Shop";
import ShopContextProvider, { ShopContext } from "./contexts/ShopContext";
import Cart from "./pages/cart/Cart";
import ShopUserLogged from "./pages/shop/ShopUserLogged";
import Userdetails from "./pages/userdetails/Userdetails";
import { UserProvider } from "./contexts/UserContext";
import Update from "./pages/userdetails/Update";
import Checkout from "./pages/checkout/Checkout";
import ProductOrder from './pages/productOrder/ProductOrder';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/shop" element={<ShopUserLogged />} />
              <Route path="/ragister" element={<Ragister />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/userdetails" element={<Userdetails />} />
              <Route path="/update"   element={<Update/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/productorder" element={<ProductOrder/>}/>

            </Routes>
          </Router>
          </UserProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
