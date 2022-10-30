import React, { useContext, useState } from "react";
import '../hojas-de-estilo/ItemDetail.css';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { CartContext } from "../context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({ item }) {
  const [unidades, setUnidades] = useState(0);
  const { addToCart } = useContext(CartContext)
  const prueba = (numero) => {
    setUnidades(numero);
    addToCart(item, numero);
    toast("Wow so easy!")
  };
  const notify = () => toast("Wow so easy!")
  return (
    <div className="item-detail">
      
      <ToastContainer />

      <img src={item.img} alt='Detalle del Artículo'/>
      <div className="info-detail">
        <h2>{item.titulo}</h2>
        <h4>${item.precio}</h4>
        <h2>{item.categoria}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minus
        officia? Vel laborum modi exercitationem voluptas dolorem similique,
        deleniti?</p>
        
        {  <h2 style={{color: unidades === 0 ? 'red' : 'blue'}}>
          {unidades === 0 ? `Hay ${unidades} unidades`
                          : `Ya agregaste productos al carrito`} </h2>
        }        
        {unidades === 0 ? (<ItemCount prueba={prueba} inicial={1} stock={item.stock} />) : (<Link to='/cart'>Ir al carrito</Link>)}

        
      </div>
    </div>
  );
};

export default ItemDetail;