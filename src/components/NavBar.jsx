import React from "react";
import "../hojas-de-estilo/NavBar.css";
import CartWidget from "./CartWidget.jsx";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <div className="contenedor-logo">
        <img
          className="logo"
          src="https://res.cloudinary.com/dm8grxewo/image/upload/v1666013386/Librer%C3%ADa/logotipo_v6z6ci.png"
          alt="Logo"
        />
        <Link to={`/categoria/Novedades`}>
          <h1>
            <em>LibroShop</em>
          </h1>
        </Link>
      </div>
      <ul className="item-nav">
        <NavLink to={"/categoria/Literatura"}>Literatura</NavLink>
        <NavLink to={"/categoria/Astrología"}>Astrología</NavLink>
        <NavLink to={"/categoria/Arte"}>Arte</NavLink>
        <NavLink to={"/categoria/Cabala"}>Cabala</NavLink>
        <NavLink to={"/categoria/Cuentos"}>Cuentos</NavLink>
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;
