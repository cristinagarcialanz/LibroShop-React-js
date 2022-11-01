import React from "react";
import "../hojas-de-estilo/ItemListContainer.css";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { NombreCategoria } = useParams();

  useEffect(() => {
    const collectionProd = collection(db, 'productos');
    
    const referencia = NombreCategoria
      ? query(collectionProd, where('categoria', '==', NombreCategoria))
      : collectionProd

    getDocs(referencia)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });   
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => setLoading(true);
  }, [NombreCategoria]);

  return (
    <div className="item-list-container">
      {loading ? (
        <CircleLoader color="#363636" />
      ) : (
        <div>        

          <ItemList items={items} />
          
        </div>        
        
      )}
    </div>
  );
}
export default ItemListContainer;
