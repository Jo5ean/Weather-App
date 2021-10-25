import React from "react";
//import cities from '../data';//z
import Card from "./Card"; 
import Styles from '../Styles/Cards.module.css'

export default function Cards({cities, onRemove}) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={Styles.Cards}>
        { cities.map((city) => (
          <Card
          key={city.id}
            name={city.name}
            min={city.min}
            max={city.max}
            img={city.img}

            onClose={()=>onRemove(city.id)}
            
          />
        ))}
    </div>
  );
}
