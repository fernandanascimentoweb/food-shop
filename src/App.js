import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';
import CartDetails from './components/CartDetails';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
