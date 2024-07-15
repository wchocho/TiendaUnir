import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';
import useProducts from '../hooks/useProducts';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error al cargar productos: {error.message}</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
