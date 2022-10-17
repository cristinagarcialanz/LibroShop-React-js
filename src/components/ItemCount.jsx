import './hojas-de-estilo/ItemCount.css'
import React, { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(props.inicial);

  const sumar = () => {
    if(count < props.stock) {
      setCount(count + 1)
    }
  }

  const restar = () => {
    if(count > props.inicial) {
      setCount(count - 1)
    }
  }

  return (
    <div className="container-count">
      <div className="count-btn">
        <button disabled={count === props.stock} onClick={sumar}>+</button>
        <p>{count}</p>
        <button disabled={count === props.inicial} onClick={restar}>-</button>
      </div>
      <button className="add-btn">Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
