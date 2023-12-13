import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

function NavBar() {
  return (
    <nav>
      <NavLink to='/'>Inicio</NavLink>
      <NavLink to='/autores'>Autores</NavLink>
      <NavLink to='/temas'>Temas</NavLink>
      <NavLink to='/agregartema'>Agregar Tema</NavLink>
      <NavLink to='/libros'>Libros</NavLink>
      <NavLink to='/agregarlibro'>Agregar Libros</NavLink>
    </nav>
  )
}

export default NavBar
