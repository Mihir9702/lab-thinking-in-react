import React from 'react';

const Stock = ({ stock, setStock }) => {
  return (
    <div>
      <label>Check In Stock Only</label>
      <input type="checkbox" value={stock} onChange={() => setStock(!stock)} />
    </div>
  );
};

export default Stock;
