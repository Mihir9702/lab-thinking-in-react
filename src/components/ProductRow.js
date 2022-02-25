import React from 'react';

const ProductRow = ({ product }) => {
  return (
    <div style={styles.flex}>
      <p style={styles.name}>{product.name}</p>
      <p style={styles.price}>{product.price}</p>
    </div>
  );
};

const styles = {
  name: {
    position: 'relative',
    marginRight: '22.5em',
  },

  price: {
    position: 'absolute',
    marginLeft: '22.5em',
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ProductRow;
