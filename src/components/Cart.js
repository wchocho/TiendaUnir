import React, { useContext } from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
      {cartItems.length > 0 && <button>Proceder al Pago</button>}
    </div>
  );
};

export default Cart;
