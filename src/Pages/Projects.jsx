import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
  <>
  
    <input type="search"  placeholder='Search Project'/>
  
  <nav>
    <NavLink to="/projects"> React Projects</NavLink>
    <NavLink to="js"> JS Projects</NavLink>
    <NavLink to="vue"> Vue.js Projects</NavLink>
  </nav>
  <Outlet/>
  </>
  )
}

export default Projects