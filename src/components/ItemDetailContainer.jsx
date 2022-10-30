import React from "react";
import "../hojas-de-estilo/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { products } from "./Products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RingLoader from 'react-spinners/RingLoader'

function ItemDetailContainer() {
  // se encarga de traer los productos dentro de una promesa y guardarlos dentro del estado

  //Estado
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  //Efecto
  useEffect(() => {
    const traerProducto = () => {
      return new Promise((res, rej) => {
        const producto = products.find((prod) => prod.id === Number(id));
        setTimeout(() => { res(producto); }, 2500);
      });
    };
    traerProducto()
      .then( (res) => { setItem(res); })
      .catch( (error) => { console.log(error); })
      .finally(() => setLoading(false));
  }, []);

  // el array de dependencia se usa para que el useEffect se renderice una sola vez

  return (
    <div className="item-detail-container">
      {loading 
                    ? (<RingLoader color="#363636" />) 
                    : ( <ItemDetail item={item} /> )}
    </div>
  );
}
export default ItemDetailContainer;
