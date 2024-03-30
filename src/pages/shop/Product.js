import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

const Product = (props) => {
  const {
    id,
    name,
    logo,
    catagory,
    price,
    description,
    featureone,
    featuretwo,
    featurethree,
    featurefour,
  } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product-container">
     
            <h2>Name: {name}</h2>
            <img src={logo} alt={name} />
            <h3>Price: {price}</h3>
            <p>{description}</p>
            <button onClick={() => addToCart(id)}>Add to Cart
                {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
      
      
    </div>
  );
};

export default Product;
