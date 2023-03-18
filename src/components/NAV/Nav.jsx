import React from "react";
import SearchBar from "../SEARCHBAR/SearchBar";
import style from "./Nav.module.css"
import {Link} from 'react-router-dom';

const Nav = ({onSearch}) => {
 
    return (
      <div className={style.nav} >
        <h1 className={style.welcome}>Welcome to the multiverse Rick and Morty</h1>
        <SearchBar onSearch={onSearch}/>
        <button className={style.boton}>
          <Link to='home'>HOME</Link>
        </button>
        <button className={style.boton}>
          <Link to='about'>ABOUT</Link>
        </button>
        <button className={style.boton}>
          <Link to='/'>LOGOUT</Link>
        </button>
        <button className={style.boton}>
          <Link to='Favorites'>FAVORITES</Link>
        </button>
        
      </div>
    );
}

export default Nav;