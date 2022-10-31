import '../hojas-de-estilo/ItemCount.css'
import React, { useEffect, useState } from "react";

function ItemCount({stock, inicial = 1, prueba}) {
  
  const [count, setCount] = useState(inicial);  

  const sumar = () => {
    count < stock && setCount(count + 1);
    }  

  const restar = () => {
    count > 1 && setCount(count - 1);
    }
  
  const add = () => {
    prueba(count);
  };

  useEffect(() => {
    setCount(inicial)
  }, [inicial])

  return (
    <div className="container-count">
      <div className="count-btn">
        <button disabled={count === stock} onClick={sumar}>+</button>
        <p>{count}</p>
        <button onClick={restar}>-</button>
      </div>
      <button className="add-btn" onClick={add}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
