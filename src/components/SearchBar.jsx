import React from "react";

//import Button from 'react-bootstrap/Button';
import Styles from '../Styles/SearchBar.module.css';

import {FiSearch} from "react-icons/fi";

export default function SearchBar({ onSearch }) {    //onsearch llega de app.js

  function handleOnSearch(event){    //comrpobamos que sea una funcion, de esta manera evitamos que se crashee
    event.preventDefault();
    if(typeof onSearch==="function") {
      const input = document.getElementById("search-bar-input"); //aca estoy obteniendo el valor obtenido de input, osea lo que ingreso en la barra de busqueda
      onSearch(input.value);
    }
  }

  return (
    <form className={Styles.searchBar} onSubmit={handleOnSearch}>
      <input placeholder='Ciuedad ... ' id={"search-bar-input"}/>
      {/* <Button variant={'outline-warning'}>Warning</Button> */}
      <button type='submit'>
      <FiSearch/>
          </button>
    </form>
  );
}
