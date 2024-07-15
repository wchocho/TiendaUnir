
import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a la Tienda Online</h1>
      <ProductList />
    </div>
  );
};

export default Home;
