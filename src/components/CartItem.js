import React from 'react';
import '../styles/CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item__image" />
      <div className="cart-item__details">
        <h2 className="cart-item__title">{item.title}</h2>
        <p className="cart-item__price">${item.price}</p>
      </div>
      <button className="cart-item__button" onClick={() => removeFromCart(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
