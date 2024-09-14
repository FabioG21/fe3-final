import React from 'react'
import { Link } from 'react-router-dom'
import { useDentStates } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const{state, dispatch} = useDentStates();

  const toggleTheme =() => {
    dispatch({type:"TOGGLE_THEME"})
    //console.log(state.theme)
  };
  return (
    <nav >
     <div className={"nav-items"}>
       <img src="/DH.ico" alt="LOGO" />
       <Link to={"/"}>Home</Link>
       <Link to={"/contact"}>Contact</Link>
       <Link to={"/favs"}>Favs</Link>
     </div>
      <button onClick={toggleTheme} className={"nav-button"}> {state.theme === 'light' ? ("Dark Mode 🌛") : ("Day Mode 😎")}</button>
    </nav>
  )
}

export default Navbar