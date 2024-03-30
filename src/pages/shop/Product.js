import React, { useContext, useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

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
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const detailPage = (Product) => {
    setDetail([{ ...Product }]);
    setClose(true);
  };
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <>
      {close ? (
        <div>
          {detail.map((props) => {
            return (
              <>
                <div key={id}>
                  <button onClick={() => setClose(false)}>
                    <IoIosCloseCircle />
                  </button>

                  <div>
                    <img src={logo} alt={name}></img>
                  </div>
                  <div>
                    <h2>{name}</h2>
                    <h3>Price: {price}</h3>
                  </div>
                  <p>Discriptions: {description}</p>
                  <button onClick={() => addToCart(id)}>Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                  <div>
                    <h3>Features</h3>
                    <li>{featureone}</li>
                    <li>{featuretwo}</li>
                    <li>{featurethree}</li>
                    <li>{featurefour}</li>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : null}

      <div className="product-container">
        <h2>Name: {name}</h2>
        <img src={logo} alt={name} />
        <h3>Price: {price}</h3>
        <p>{description}</p>
        <button onClick={() => addToCart(id)}>
          Add to Cart
          {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button onClick={() => detailPage(props)}>View Details</button>
      </div>
    </>
  );
};

export default Product;
