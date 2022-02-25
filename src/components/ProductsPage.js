import { useEffect, useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import Stock from './Stock';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(false);

  useEffect(() => {
    setProducts(
      jsonData.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    stock
      ? setProducts(jsonData.filter((product) => product.inStock))
      : setProducts(jsonData);
  }, [stock]);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Stock stock={stock} setStock={setStock} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
