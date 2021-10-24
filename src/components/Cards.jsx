import React from "react";
//import cities from '../data';//z
import Card from "./Card"; 
import Styles from '../Styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={Styles.cards}>
      {props.cities ? (
        props.cities.map((city) => (
          <Card
          key={city.id}
            name={city.name}
            min={city.main.temp_min}
            max={city.main.temp_max}
            img={city.weather[0].icon}
            onClose={()=>alert(city.name)}
            
          />
        ))
      ) : (
        <h2>Error 040, cerebro not found!</h2>
      )}
    </div>
  );
}
