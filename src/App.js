import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer'
import ProductAdd from './pages/ProductAdd'
import ProductList from './pages/ProductList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<ProductAdd />} />
        <Route path="/add-product" element={<ProductList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
