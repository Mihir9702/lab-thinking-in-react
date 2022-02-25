import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import Stock from './Stock';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setProducts={setProducts} jsonData={jsonData} />
      <Stock setProducts={setProducts} jsonData={jsonData} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
