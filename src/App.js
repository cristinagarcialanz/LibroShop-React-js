import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter className="App">

      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:NombreCategoria' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} /> 
        
        <Route path='*' element={<h2>¡Página no encontrada!</h2>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
