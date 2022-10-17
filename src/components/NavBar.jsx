import React from 'react';
import '../hojas-de-estilo/NavBar.css';
import CartWidget from './CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {  

  return (
    <nav className='nav'>
    
    <Link to='/' ><h1>LibroShop</h1></Link>

    <ul>
      <NavLink to='/categoria/Literatura' >Literatura</NavLink>
      <NavLink to='/categoria/Astrología' >Astrología</NavLink>
      <NavLink to='/categoria/Arte' >Arte</NavLink>
      <NavLink to='/categoria/Cabala' >Cabala</NavLink>
    </ul>


      <Link to='/cart' ><CartWidget/></Link>

    </nav>
  );
}

export default NavBar;