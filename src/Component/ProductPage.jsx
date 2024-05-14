// ProductPage.js
import React, { useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99
    },
    {
      id: 3,
      name: 'Product 3',
      price: 29.99
    }
  ];

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default ProductPage;
