import React from 'react';

const ProductRow = ({ product }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ position: 'relative', marginRight: '22em' }}>
        {product.name}
      </p>
      <p style={{ position: 'absolute', marginLeft: '23em' }}>
        {product.price}
      </p>
    </div>
  );
};

export default ProductRow;
