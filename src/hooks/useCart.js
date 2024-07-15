// src/hooks/useCart.js
import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return { cartItems, addToCart, removeFromCart };
};

export default useCart;
