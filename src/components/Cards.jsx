import React from "react";
//import cities from '../data';//z
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div>
      {props.cities ? (
        props.cities.map((cities) => (
          <Card
            name={cities.name}
            min={cities.main.temp_min}
            max={cities.main.temp_max}
            img={cities.weather[0].icon}
            key={cities.id}
          />
        ))
      ) : (
        <h2>Error 040, cerebro not found!</h2>
      )}
    </div>
  );
}
