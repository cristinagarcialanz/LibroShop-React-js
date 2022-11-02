import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "./context/CartContext";
import Home from "./components/Home"


function App() {
  return (
    <Provider>
      <BrowserRouter className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ItemListContainer/>} />
          <Route path="/categoria/:NombreCategoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />          
          <Route path="/checkout" element={<Form />} />

          <Route path="*" element={<h2>¡Página no encontrada!</h2>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
