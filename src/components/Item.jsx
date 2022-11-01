import React from "react";
import '../hojas-de-estilo/Item.css';
import { Link } from "react-router-dom";

function Item({ prod }) {
  //renderizar en el DOM los productos

  return (
    <div>
      <article className="item">
        <div className="container-imagen">
        <img className="imagen" src={prod.img} alt="LibroShop" />
        </div>
        <div className="item-info">          
          <h3>{prod.titulo}</h3>
          <h4>{prod.oferta}</h4>
          <h4>{prod.categoria}</h4>
          <hr/>
          <br/>
          <Link className="detalle" to={`/item/${prod.id}`}>Ver Detalle</Link>
        </div>
      </article>
    </div>
  );
}

export default Item;
