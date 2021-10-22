import React from "react";
import Styles from '../Styles/Card.module.css';

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className={Styles.cardCain}>
      <button onClick={onClose}>x</button>
      <h1>{name}</h1>

      <div >
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Icono" />
    </div>
  );
}
