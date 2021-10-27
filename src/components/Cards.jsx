import React from "react";
import Card from "./Card";
import Styles from '../Styles/Cards.module.css'

export default function Cards({cities , onRemove}) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={Styles.cards}>
      { cities.map((city) => (
          <Card
            key={city.id}
            name={city.name}
            min={city.min}
            max={city.max}
            img={city.img}
            id={city.id}
            onClose={()=>onRemove(city.id)}
            
          />
        ))}
    </div>
  );
}
