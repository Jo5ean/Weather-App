import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Ciudad() {
  const [city, setcity] = useState(undefined);

  //Escuchamos id de los parametros
  const { id } = useParams();

  //creamos un efecto que se inicia cada vez que se cambia el parametro id
  useEffect(() => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`
      ) //sucersor de AJAX
        //el fech nos trae la respuesta r del servidor API

        .then((r) => r.json()) //convierte la respuesta en json (ponele que llegue en xml)

        .then((recurso) => {
          if (recurso.main !== undefined) {
            const ciudad = { //  *  aca se setea a la ciudad como un objeto 
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon,
            };
            setcity (ciudad);
          } else { //  *  o la setea como nulo
            setcity(null);
          }
        });
  }, [id]);

  return (<>
      {city === undefined && <h1>Cargando...</h1> }

      {city === null && <h1>Ciudad no encontrada</h1>}

      {city && (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
    )}
      
  </>);
}
//   switch (typeof city)
// {
//     case "undefined": 
//     return <h1>Cargando...</h1>;
//     break;

//     case "objet":
//  return (
//     <div className="ciudad">
//       <div className="container">
//         <h2>{city.name}</h2>
//         <div className="info">
//           <div>Temperatura: {city.temp} ºC</div>
//           <div>Clima: {city.weather}</div>
//           <div>Viento: {city.wind} km/h</div>
//           <div>Cantidad de nubes: {city.clouds}</div>
//           <div>Latitud: {city.latitud}º</div>
//           <div>Longitud: {city.longitud}º</div>
//         </div>
//       </div>
//     </div>
//   );
//   break;
//   default: 
//   return <h1>Ciudad no encontrada</h1> //default seria lo mismo que poner 'case "null":'
// }
// break;
// } 