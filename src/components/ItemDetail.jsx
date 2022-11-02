import React, { useContext, useState } from "react";
import '../hojas-de-estilo/ItemDetail.css';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({ item }) {

  const [unidades, setUnidades] = useState(0);

  const { addToCart, getProductQuantity } = useContext(CartContext)

  const prueba = (numero) => {
    setUnidades(numero);
    addToCart(item, numero);
    toast.success(`Agregaste ${numero} productos al carrito!`)
  };

  const quantity = getProductQuantity(item.id);
  
  return (
    <div className="item-detail">
      
      <ToastContainer         
        autoClose={2000} 
        position="bottom-right"         
        />

      <img src={item.img} alt='Detalle del Artículo'/>

      <div className="info-detail">
        <h2>{item.titulo}</h2>
        <h4>${item.precio}</h4>
        <h2>{item.categoria}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minus
        officia? Vel laborum modi exercitationem voluptas dolorem similique,
        deleniti?</p>
        <br />
        {unidades === 0 ? (<ItemCount prueba={prueba} inicial={quantity} stock={item.stock} />) : (<Link to='/cart'><h4><em>Ir al Carrito</em></h4></Link>)}
        
        <Link to={`/todos`}>
          <h4>
            <em>Ir a la Galería de Productos</em>
          </h4>
        </Link>

      </div>
    </div>
  );
};

export default ItemDetail;