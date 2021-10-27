import React from "react";
import Styles from '../Styles/SearchBar.module.css';
import {IoSearchOutline} from 'react-icons/io5';

export default function SearchBar({ onSearch }) {    //onsearch llega de app.js
  // acá va tu código


  function handleOnSearch(event){    //comrpobamos que sea una funcion, de esta manera evitamos que se crashee

    event.preventDefault();
    if(typeof onSearch==="function") {
      const input = document.getElementById("search-bar-input"); //aca estoy obteniendo el valor obtenido de input, osea lo que ingreso en la barra de busqueda
      onSearch(input.value);
      input.value = "";
    }
  }

  return (
    <form className={Styles.searchBar} onSubmit={handleOnSearch}>

      <input placeholder='Ciudad...' id="search-bar-input"/>
      <button type='submit'>
         <IoSearchOutline/>
        </button>
    </form>
  );
}
