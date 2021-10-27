import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad';



const API_KEY = process.env.REACT_APP_API_KEY //ocultamos la key de la appi

function App() {

  const [cities, setCities] = useState ([]); //variable que va a contener la ciudad que se agrega o que se saca o lo que sea que hagamos con ella skere

  //CREAMOS FUNCION DE AGREGAR CIUDAD

  function handleAddCity (city){
    setCities((prevCities) =>{
      return [city, ...prevCities];
    });
  }

  //CREAMOS FUNCION DE REMOVER CIUDAD

  function handleRemoveCity (cityId){
    setCities((prevCities) =>{
      return prevCities.filter((city)=>{
        return cityId!==city.id;
      });
    });
  }
  
  //CREAMOS FUNCION DE BUSCAR UNA CIDAD PARA LA SEARCHBAR

  function onSearch(ciudad) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`) //sucersor de AJAX

    //el fech nos trae la respuesta r del servidor API

      .then(r => r.json()) //convierte la respuesta en json (ponele que llegue en xml)

      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
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
            longitud: recurso.coord.lon
          };
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }



  
  return (
    <div className="App">
      <Route path="/" render={()=><Nav onSearch={onSearch}/>}/>
      <Route
      path="/"
      exact
      render={()=><Cards cities={cities} onRemove={handleRemoveCity}/>}
      />
      <Route
      path="/ciudad/:id"
      exact
      render={({match})=> {
        const city = cities.find(
    
          (city) => city.id === parseInt (match.params.id)
        );
        return city?<Ciudad city={city} /> : <h1>404 | Error</h1>
      }}
      />
      <Route path="/about" component ={About}/>
    </div>
  );
}

export default App;
