import React from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import ItemList from './ItemList';
import { products } from './Products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';

function ItemListContainer() {
// se encarga de traer los productos dentro de una promesa y guardarlos dentro del estado 

  const {NombreCategoria} = useParams()
  // NombreCategoria => Literatura, Astrología, Arte, Cabala, Cuentos

  //Estado
  const [items, setItems] = useState([]);  
  const [loading, setLoading] = useState(true);

  //Efecto
  useEffect(() => {
    const traerProductos = ( ) => {
      return new Promise ((res, rej) => {
        const prodFiltrados = products.filter((prod) => prod.categoria === NombreCategoria);
        setTimeout( () => { res(NombreCategoria ? prodFiltrados : products); }, 1500);
      });
    };
    traerProductos()
      .then((res) => { setItems(res);
    })
      .catch((error) => { console.log(error);
    })
    .finally(() => setLoading(false));
  }, [NombreCategoria]);

  // Cuando escucha que nombran una categoría se renderiza el componente  
  
  return(
    <div className="item-list-container">
      {loading 
                    ? (<CircleLoader color="#363636" />) 
                    : (<div><h3 className='h3'> Bienvenidos a su Librería virtual LibroShop </h3>
      <h3 className='novedades'>Novedades</h3>
      <ItemList items={items} /></div>)}  
      
    </div>
  );
};
export default ItemListContainer;