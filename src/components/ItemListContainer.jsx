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
    const collectionProd = collection(db, "productos");
    const q = query(collectionProd, where("categoria", "==", "Novedades"));

    getDocs(q)
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
          <h3 className="h3"> Bienvenidos a su Librería virtual LibroShop </h3>

          <ItemList items={items} />
        
          <ul><h2>Tenemos mucho más contenido, visitanos en:</h2>
        <li>Podcasts.</li>
        <li>Redes sociales.</li>
        <li>Blogs.</li>
        <li>Anuncios publicitarios (Facebook Ads, Google Ads, Instagram Ads…)</li>
        <li>Amazon.</li>
        <li>Wattpad y otras plataformas de lectura digital.</li>
        <li>Email Marketing.</li>
        </ul>
        
        </div>        
        
      )}
    </div>
  );
}
export default ItemListContainer;
