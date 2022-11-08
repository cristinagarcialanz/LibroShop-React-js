import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/Home.css";
import { BsCart4 } from "react-icons/bs";
import CircleLoader from "react-spinners/CircleLoader";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import FavoritosList from "./FavoritosList";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionProd = collection(db, "productos");
    const q = query(collectionProd, where("precio", "<", 32));

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
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <CircleLoader color="#363636" />
      ) : (
        <div>
          <h3 className="titulo">
            Bienvenidos a LibroShop... Tu Librería Virtual
          </h3>
          <h4 className="titulo">
            <BsCart4 /> Ofertas del Mes <BsCart4 />
          </h4>
          <ItemList items={items} />

          
          <div className="tareas-lista-principal">
            <h3 className="titulo-favoritos">Indícanos tu Colección de Libros Favoritos</h3>
            <h4 className="titulo-favoritos">Tacha los que ya tienes...</h4>
            <FavoritosList />
          </div>

          <div>
        
        <p>
          LibroShop es una web con gran contenido de libros, cuentos, material
          de papelería, juguetes educativos y regalos.
        </p>
        <br />
        <hr />
        <h3>Tenemos mucho más contenido, visitanos en:</h3>
        <ul className="lista">
          <li>
            <a href="/">Podcasts</a>
          </li>
          <li>
            <a href="/">Redes sociales</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">
              Anuncios publicitarios (Facebook Ads, Google Ads, Instagram Ads…)
            </a>
          </li>
          <li>
            <a href="/">Amazon</a>
          </li>
          <li>
            <a href="/">Wattpad y otras plataformas de lectura digital</a>
          </li>
          <li>
            <a href="/">Suscribete al Newsletter</a>
          </li>
        </ul>
      </div>

        </div>
      )}
    </div>
  );
}

export default Home;
