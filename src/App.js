import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Ragister from './pages/ragister/Ragister';
import Login from './pages/login/Login';
import Shop from './pages/shop/Shop';
import ShopContextProvider, { ShopContext } from './contexts/ShopContext';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Routes>
        <Route path='/' element={<Ragister/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
