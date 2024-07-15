import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} className="product-item__image" />
      <h2 className="product-item__title">{product.title}</h2>
      <p className="product-item__price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="product-item__link">Ver Detalles</Link>
    </div>
  );
};

export default ProductItem;
