import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import './styles/App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
