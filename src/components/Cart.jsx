import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../hojas-de-estilo/Cart.css";
import { AiFillDelete } from "react-icons/ai";
//import { Link } from "react-router-dom";

function Cart() {
  const { cart, deleteAll, deleteOne, totalCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h1>Aún no hay productos en el carrito</h1>;
    //<Link to={`/categoria/Novedades`}><h1><em>Home</em></h1></Link>      
  }
  
  return (
    <div className="cart-container">
      {cart.map((prod) => (
        <div className="cart-detail" key={prod.id}>
          <img src={prod.img} alt={prod.title} width="100px" />
          <div className="cart-detail-info">
            <h2>{prod.title}</h2>
            <h3>Cantidad: {prod.cantidad}</h3>
            <h3>Precio: ${prod.precio}.-</h3>
            <h4>Subtotal: ${prod.precio * prod.cantidad}.-</h4>
          </div>
          
            <AiFillDelete
              size={30}
              color="red"
              onClick={() => deleteOne(prod.id)}
            />
          
        </div>
      ))}
      <h2>Total: ${totalCart()}</h2>
      <button onClick={deleteAll}>Eliminar todo el carrito</button>
    </div>
  );
}

export default Cart;
