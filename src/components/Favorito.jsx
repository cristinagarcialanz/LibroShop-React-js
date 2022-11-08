import React from "react";
import "../hojas-de-estilo/Favorito.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Favorito({ id, texto, completado, completarFavorito, eliminarFavorito }) {
  return (
    <div className={completado ? 'tarea-contenedor completado' : 'tarea-contenedor'}>
      
      <div 
        className="tarea-texto"
        onClick={() => completarFavorito(id)}>
        {texto}
      </div>

      <div       
      onClick={() => eliminarFavorito(id)}>
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>

      
    </div>
  );
}

export default Favorito;
