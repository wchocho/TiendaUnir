import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error al cargar producto: {error.message}</p>;
  }

  return (
    product && (
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="product-detail__image" />
        <h2 className="product-detail__title">{product.title}</h2>
        <p className="product-detail__description">{product.description}</p>
        <p className="product-detail__price">${product.price}</p>
        <button className="product-detail__button" onClick={() => addToCart(product)}>
          Añadir al Carrito
        </button>
      </div>
    )
  );
};

export default ProductDetail;
