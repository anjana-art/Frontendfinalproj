import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import NavShopUser from "../shop/NavShopUser";
import { Button } from "@mui/material";
import {Link} from "react-router-dom";



const ProductOrder = (props) => {
  //const {id,  name,logo, price } = props.data;

  const {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div>
      <NavShopUser/>
      <h2>Product Order Details</h2>
      <div>
        <div>
          <h4>Product Name:{}</h4>
        </div>
        <div>
          <h4>Price:{getTotalCartAmount()}</h4>
        </div>
        <div>
          <h3>Thankyou for your Order.</h3>
        </div>
      </div>
      <button><Link to='/shop'>Return to Home Page</Link></button>
    </div>
  );
};

export default ProductOrder;
