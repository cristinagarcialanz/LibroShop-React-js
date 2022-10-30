import React, { useContext } from "react";
import '../hojas-de-estilo/CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";


function CartWidget() {

    const { totalUnidades } = useContext(CartContext);
    const total = totalUnidades();

    return(
        <div className="cartwidget">
            <AiOutlineShoppingCart  className="icon-cart"/>
            <span>{total}</span>
        </div>
    )
}
export default CartWidget;