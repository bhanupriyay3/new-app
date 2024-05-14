import React, { useState } from 'react';
import Home from './Component/Home'
import Pricing from './Component/Pricing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './Component/ProductPage';
import Nav from './Component/Nav';
import CartPage from './Component/CartPage'; // Import CartPage


const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <Router>
           <Nav/>
            <Routes> 
                <Route path="/" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage cart={cart} />} />
            </Routes>
        </Router>
    );
}

export default App;


