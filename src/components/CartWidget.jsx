import React from "react";
import './hojas-de-estilo/CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";


function CartWidget() {

    return(
        <div className="cartwidget">
            <AiOutlineShoppingCart  className="icon-cart"/>
            <p>3</p>
        </div>
    )
}
export default CartWidget;