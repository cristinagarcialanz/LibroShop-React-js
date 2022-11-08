import React, { useState } from "react";
import "../hojas-de-estilo/ListaDeFavoritos.css";
import FavoritoFormulario from "./FavoritoFormulario";
import Favorito from "./Favorito";

function FavoritosList(props) {

  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = favorito => {
    if (favorito.texto.trim()) {
      favorito.texto = favorito.texto.trim();
      const favoritosActualizados = [...favoritos, favorito];
      setFavoritos(favoritosActualizados);
    }
  }

  const eliminarFavorito = id => {
    const favoritosActualizados = favoritos.filter(favorito => favorito.id !== id);
    setFavoritos(favoritosActualizados);
  }

  const completarFavorito = id => {
    const favoritosActualizados = favoritos.map(favorito => {
      if (favorito.id === id) {
        favorito.completado = !favorito.completado;
      }
      return favorito;
    });
    setFavoritos(favoritosActualizados);
  }

  return (
    <>
      <FavoritoFormulario onSubmit={agregarFavorito} />

      <div className="tareas-lista-contenedor">
        {
          favoritos.map((favorito) => 
          <Favorito 
            key={favorito.id}
            id={favorito.id}
            texto={favorito.texto}
            completado={favorito.completado}
            completarFavorito={completarFavorito}
            eliminarFavorito={eliminarFavorito}
          />
          )
        }
      </div>

    </>
  );
}

export default FavoritosList;
