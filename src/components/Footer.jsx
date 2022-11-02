import React from "react";
import "../hojas-de-estilo/Footer.css";
import { BsWhatsapp, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'


function Footer(props) {
  return (
    <div>
      <footer>
        <p>Todos los derechos reservados por Copy Right</p>
        <br/>
        <a href="/"><BsWhatsapp /></a>
        <a href="/"><BsYoutube /></a>
        <a href="/"><BsInstagram /></a>
        <a href="/"><BsFacebook /></a>
        
      </footer>
      
    
    </div>
  );
}

export default Footer;
