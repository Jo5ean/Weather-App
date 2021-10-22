import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Styles from '../Styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
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

  return (
    <div className={Styles.container}>

      <input type={"text"} placeholder={"Que ciudad buscas ?"} />
      {/* <Button variant={'outline-warning'}>Warning</Button> */}
      <button className={Styles.btnSearch} onClick={(input) => onSearch('Ciudad de') }> Agregar </button>
    </div>
  );
}
