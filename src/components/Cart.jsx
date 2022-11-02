import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../hojas-de-estilo/Cart.css";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, deleteAll, deleteOne, totalCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      (<h1>Aún no hay productos en el carrito</h1>),
      (
        <Link to={`/todos`}>
          <h1 className="mensaje">
            <em>Ir a la Galería de Productos</em>
          </h1>
        </Link>
      )
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-info">
        {cart.map((prod) => (
          <div className="cart-detail" key={prod.id}>
            <img src={prod.img} alt={prod.titulo} width="100px" />
            <div className="cart-detail-info">
              <h2>{prod.titulo}</h2>
              <h3>Cantidad: {prod.cantidad}</h3>
              <h3>Precio: ${prod.precio}.-</h3>
              <h3>Subtotal: ${prod.precio * prod.cantidad}.-</h3>
            </div>

            <BsTrash size={30} color="red" onClick={() => deleteOne(prod.id)} />
          </div>
        ))}
      </div>
      <h2>Total: ${totalCart()}</h2>
      <button onClick={deleteAll}>Eliminar todo el carrito</button>
      <Link className="boton-checkout" to={"/checkout"}>
        Checkout
      </Link>
    </div>
  );
}

export default Cart;
