import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        <h2>Products</h2>
        <ul>
          <li>Product 1 <button onClick={() => addToCart("Product 1")}>Add to Cart</button></li>
          <li>Product 2 <button onClick={() => addToCart("Product 2")}>Add to Cart</button></li>
          <li>Product 3 <button onClick={() => addToCart("Product 3")}>Add to Cart</button></li>
        </ul>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App