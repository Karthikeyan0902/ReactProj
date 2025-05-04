import React, { useState, useMemo, useCallback } from 'react';
import FindingBar from '../Components/FindingBar'
import Sidebar from '../Components/SideBar';

// Child component wrapped in React.memo
const ProductItem = React.memo(({ product, onSelect }) => {
  console.log('Rendering:', product.name); // See what’s re-rendering
  return (
    <li onClick={() => onSelect(product.name)} className="cursor-pointer hover:text-blue-500">
      {product.name}
    </li>
  );
});

const ProductList = () => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState(null);

  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' },
    { id: 4, name: 'Monitor' },
  ];

  // Memoize filtered list
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, products]);

  // Memoize select handler
  const handleSelect = useCallback((name) => {
    setSelected(name);
  }, []);

  return (
    <div className="p-4">
        <FindingBar/>
      <h1 className="text-xl font-bold mb-4">Product List</h1>

      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter products..."
        className="border p-2 mb-4 w-full"
      />

      <ul className="space-y-2">
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onSelect={handleSelect}
          />
        ))}
      </ul>

      {selected && <p className="mt-4 text-green-600">Selected: {selected}</p>}
      <Sidebar/>
    </div>
  );
};

export default ProductList;
