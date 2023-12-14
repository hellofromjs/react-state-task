import './App.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductsTable from '../ProductsTable/ProductsTable';
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState([])

  function addProduct(product)
  {
    setProducts(prevData => [...prevData, product])
  }

  return (
    <div className="container">
      <ProductForm onSubmit={addProduct}/>
      <ProductsTable products={products}/>
    </div>
  )
}

export default App
