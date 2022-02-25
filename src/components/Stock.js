import React, { useEffect, useState } from 'react';

const Stock = ({ setProducts, jsonData }) => {
  const [stock, setStock] = useState(false);

  useEffect(() => {
    stock
      ? setProducts(jsonData.filter((product) => product.inStock))
      : setProducts(jsonData);
  }, [stock, jsonData, setProducts]);

  return (
    <div>
      <label>Check In Stock Only</label>
      <input type="checkbox" value={stock} onChange={() => setStock(!stock)} />
    </div>
  );
};

export default Stock;
