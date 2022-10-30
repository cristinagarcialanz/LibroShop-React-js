import React from "react";
import { createContext, useState } from "react";

//1. Creamos el contexto y los exportamos
export const CartContext = createContext();

//2. Creamos el componente proveedor, que nos sirve para envolver el contexto: contiene funciones, variables, estados, etc.

//3. Importamos el componente proveedor a donde lo vamos a usar

//4. Hacemos uso de la prop children para visualizar todos los componentes
function Provider({ children }) {
  // 5. Creamos un estado en caso de que lo necesitemos
  const [cart, setCart] = useState([]);  

  //6. Creamos funciones para manipular el estado del contexto
  const addToCart = (item, cantidad) => {
    const producto = { ...item, cantidad };
    if (isInCart(producto.id)) {
      // sumo la cantidad
      sumarCantidad(producto);
    } else {
      setCart([...cart, producto]);
    }
  }
  const sumarCantidad = (prodAgregado) => {
    const carritoActualizado = cart.map((prodDelCart) => {      
      if(prodDelCart.id === prodAgregado.id) {
        const prodActualizado = {
          ...prodDelCart, 
          cantidad: prodDelCart.cantidad + prodAgregado.cantidad
        };
        return prodActualizado
      } else { return prodDelCart; }
    });
    setCart(carritoActualizado);
  };
  
  const isInCart = (id) => cart.some((prod) => prod.id === id);

  const deleteAll = () => setCart([]);

  const deleteOne = (id) => {
    const prodFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(prodFiltrados);
  };

  const totalUnidades = () => {
    let acc = 0;
    const copia = [...cart];
    copia.forEach((prod) => {
      acc = acc + prod.cantidad
    })
    return acc;
  };

    console.log(cart);

    //7. A través del value compartimos (estados, funciones, etc.) con todos los children
  return (
    <div>
      <CartContext.Provider value={{ cart, totalUnidades, addToCart, deleteAll, deleteOne }}>
        {children}
      </CartContext.Provider>
    </div>
  );
  
}
export default Provider;
