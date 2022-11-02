import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/NavBar.css";
import CartWidget from "./CartWidget.jsx";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const collectionCat = collection(db, "categorias");

    getDocs(collectionCat)
      .then((res) => {
        const categorias = res.docs.map((cat) => {
          return {
            id: cat.id,
            ...cat.data(),
          };
        });
        setCategories(categorias);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <nav className="nav">
      <div className="contenedor-logo">
        
        <img
            className="logo"
            src="https://res.cloudinary.com/dm8grxewo/image/upload/v1666013386/Librer%C3%ADa/logotipo_v6z6ci.png"
            alt="Logo"
          />
      
        <Link to={"/todos"}>
          <h1 className="titulo">
            <em>LibroShop</em>
          </h1>
        </Link>
      </div>
      <ul className="item-nav">
        {categories.map((cat) => (
          <NavLink key={cat.id} to={`/categoria/${cat.path}`}>
            {cat.name}
          </NavLink>
        ))}
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;
