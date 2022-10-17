import React from "react";
import { Link } from "react-router-dom";

function Item({ prod }) {
  //renderizar en el DOM los productos

  return (
    <div>
      <article className="item">
        <img src={prod.img} alt="LibroShop" />

        <div className="item-info">
          <h4>{prod.titulo}</h4>
          <h4>${prod.precio}</h4>
          <h5>{prod.categoria}</h5>
          <Link to={`/item/${prod.id}`}>ver detalle</Link>
        </div>
      </article>
    </div>
  );
}

export default Item;
