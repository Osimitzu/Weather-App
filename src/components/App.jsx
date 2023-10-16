import { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();
import "../styles/App.css";
import { Title } from "./Title";
import { SearchInput } from "./SearchInput";
import { Card } from "./Card";
import { Button } from "./Button";

function App() {
  const [info, setInfo] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const apiKey = process.env.WEATHERKEY;

  useEffect(() => {
    // sacamos la ubicación del usuario con el objeto "navigator":
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // guardamos la longitud y latitud en variables para utilizarlas en la ruta de nuestra API:
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // Establecemos el valor de nuestras variables a nuestro estado:
        setLatitude(lat);
        setLongitude(lon);
        // Hacemos la petición con la información establecida:
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
          )
          .then((res) => {
            // Establecemos el valor a nuestro estado "info":
            setInfo(res.data);
          })
          // capturamos el error de la petición:
          .catch((err) => {
            console.error(err);
          });
      },
      // capturamos el error del objeto "navigator":
      (err) => {
        console.error(err);
      }
    );
  }, []);
  // Necesito un boton para manejar el acceso a la ubicación del usuario test
  return (
    <div className="app">
      <nav className="navContainer">
        <Title />
        <SearchInput />
      </nav>
      <Card data="info" />
      <Button />
    </div>
  );
}

export default App;
