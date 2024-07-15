// src/components/Checkout.js
import React, { useState } from 'react';
import '../styles/Checkout.css';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el pago
    console.log({ name, address, creditCard });
  };

  return (
    <div className="checkout">
      <h2>Proceso de Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Dirección</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label>Tarjeta de Crédito</label>
        <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
        <button>Completar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
