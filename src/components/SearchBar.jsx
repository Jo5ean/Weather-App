import React from "react";

//import Button from 'react-bootstrap/Button';
import Styles from '../Styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {    //onsearch llega de app.js
  // acá va tu código
  //const [city, setCity] = useState("");
  /*return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e)
        onSearch(e[0]?.value);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.value);
          }}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );*/
  function handleOnSearch(){    //comrpobamos que sea una funcion, de esta manera evitamos que se crashee
    if(typeof onClose==="function") {
      const input = document.getElementById("search-bar-input"); //aca estoy obteniendo el valor obtenido de input, osea lo que ingreso en la barra de busqueda
      onSearch(input.value);
    }
  }

  return (
    <div className={Styles.searchBar }>

      <input id={"search-bar-input"}/>
      {/* <Button variant={'outline-warning'}>Warning</Button> */}
      <button onClick={handleOnSearch}> Agregar </button>
    </div>
  );
}
