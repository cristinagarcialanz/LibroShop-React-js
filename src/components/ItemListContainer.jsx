import React from 'react';
import ItemList from './ItemList';
import { products } from './Products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
// se encarga de traer los productos dentro de una promesa y guardarlos dentro del estado 

  const {NombreCategoria} = useParams()
  // NombreCategoria => Literatura Antigua, Astrología, Arte, Cabala

  //Estado
  const [items, setItems] = useState([])  

  //Efecto
  useEffect(() => {
    const traerProductos = ( ) => {
      return new Promise ((res, rej) => {
        const prodFiltrados = products.filter((prod) => prod.categoria === NombreCategoria);
        setTimeout( () => { res(NombreCategoria ? prodFiltrados : products); }, 500);
      });
    };
    traerProductos()
      .then((res) => { setItems(res) })
      .catch((error) => { console.log(error);
    });
  }, [NombreCategoria]);

  // el array de dependencia se usa para que el useEffect se renderice una sola vez  
  
  return(
    <div className="item-list-container">  
      <h3 className='h3'> Bienvenidos a su Librería virtual LibroShop. </h3>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;