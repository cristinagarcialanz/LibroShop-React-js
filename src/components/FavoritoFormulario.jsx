import React, { useState } from "react";
import '../hojas-de-estilo/FavoritoFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function FavoritoFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);    
  }

  const manejarEnvio = e => {
    e.preventDefault();    
    
    const favoritoNuevo = {
      id: uuidv4(),
      texto: input,
      completado: false
    }
    props.onSubmit(favoritoNuevo);
  }


  return (
  
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}
      >
      <input 
      className="tarea-input"
      type='text'
      placeholder='Escribe tu libro favorito...'
      name='texto'
      onChange={manejarCambio}
      />
      
      <button className="tarea-boton">
        Agregar Favorito
      </button>

    </form>
  )
}

export default FavoritoFormulario;
