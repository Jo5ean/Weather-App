import React from "react";

import CardTemp from "./CardTemp";
import PropTypes from 'prop-types';

import {AiFillCloseSquare} from "react-icons/ai";

import Styles from '../Styles/Card.module.css';

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  function handleOnClose(){
    if(typeof onClose==="function") onClose();
  }
  return (
   <div className={Styles.card}>

      <button className={Styles.btnCard} onClick={handleOnClose}>
        <AiFillCloseSquare/>
          </button> 
      <span className={Styles.cityName}>{name}</span>

      <CardTemp label = "Min" value = {min} />
      <CardTemp label = "Max" value = {max} />

      <img  
      src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
      alt="Icono"
      />
</div>
  );
}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};
