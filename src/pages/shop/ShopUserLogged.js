import React ,{useState} from 'react'
import  PRODUCTS  from './products';
import Product from './Product';
import './shop.css';
import NavShop from './NavShop';
import Filter from './filter/Filter';


const ShopUserLogged = () => {
  const[items, setItems] = useState(PRODUCTS);
  const productItems = [...new Set(PRODUCTS.map((val) => val.catagory))]

  const filterItems = (cat) => {
    const newItems = PRODUCTS.filter((newval) => newval.catagory === cat);
    setItems(newItems);
}

  return (

    <div>
      <NavShop/>
      <Filter
                    productItems={productItems}
                    filterItems={filterItems}
                    setItems={setItems}
                />
        
        <h1>Shop Software </h1>
        <div className='products'>
            
         {items.map((item)=>(<Product data={item} items = {items} />))}
        </div>
      
    </div>
  )
}

export default ShopUserLogged
