import React, { useEffect, useState } from 'react';

const SearchBar = ({ setProducts, jsonData }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProducts(
      jsonData.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, jsonData, setProducts]);

  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
