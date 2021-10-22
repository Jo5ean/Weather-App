import React from "react";
import Styles from '../Styles/Card.module.css';
import CardTemp from "./CardTemp";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  function handleOnClose(){
    if(typeof onClose==="function") onClose();
  }
  return (
   <div>

      <button onClick={onClose}>x</button> 
      <span>{name}</span>

      <CardTemp label = "Min" value = {min} />
      <CardTemp label = "Max" value = {max} />

      <img 
      src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
      alt="Icono"
      />
</div>
  );
}
