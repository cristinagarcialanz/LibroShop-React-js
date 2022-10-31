import "../hojas-de-estilo/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RingLoader from 'react-spinners/RingLoader'
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function ItemDetailContainer() {
  
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const collectionProd = collection(db, 'productos')
    const ref = doc(collectionProd, id);

    getDoc(ref)
    .then((res) => {
      setItem({
        id: res.id,
        ...res.data()
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {setLoading(false)});
    return () => setLoading(true);

  }, [id]);
  
  return (
    <div className="item-detail-container">
      {loading 
        ? (<RingLoader color="#363636" />) 
        : ( <ItemDetail item={item} /> )
      }
    </div>
  );
}
export default ItemDetailContainer;
