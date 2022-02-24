import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20em',
        }}
      >
        <h4>Name</h4>
        <h4>Price</h4>
      </div>
      {products.map((product) => (
        <ProductRow product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductTable;
