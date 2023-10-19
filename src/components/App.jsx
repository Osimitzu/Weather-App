import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { LocationPermission } from "./LocationPermission";
import { Title } from "./Title";
import { SearchInput } from "./SearchInput";
import { Card } from "./Card";
import { Button } from "./Button";
import { DarkButton } from "./DarkButton";
// import "dotenv/config";

function App() {
  const [info, setInfo] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [nom, setNom] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme): dark").matches) {
      return "dark";
    }

    return "light";
  });

  const permissionComponent = () => {
    setIsVisible(false);
  };

  // Pedimos permiso al usuario de usar su ubicación:
  const locationAgreement = () => {
    //Desactivamos la pantalla de permiso:
    permissionComponent();
    // sacamos la ubicación del usuario con el objeto "navigator":
    navigator.geolocation.getCurrentPosition((position) => {
      // guardamos la longitud y latitud en variables para utilizarlas en la ruta de nuestra API:
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // Establecemos el valor de nuestras variables a nuestro estado:
      setLatitude(lat);
      setLongitude(lon);
      // Hacemos la petición con la información establecida:
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1e097b6bc33647b803b01854a9eb07e2`
        )
        .then((res) => {
          // Establecemos el valor a nuestro estado "info":
          console.log(res.data);
          setInfo(res.data);
        })
        // capturamos el error de la petición:
        .catch((err) => {
          console.error(err);
        });
    });
  };

  // useEffect(() => {
  //   locationAgreement;
  // }, []);

  // Funcion para cambiar de grados °C a °F
  const changeDegrees = () => {
    setNom(!nom);
  };

  // Función para manejar el modo oscuro:

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <LocationPermission
        agreementData={locationAgreement}
        visible={isVisible}
      />
      <nav className="navContainer">
        <Title />
        <SearchInput />
        <DarkButton themeInfo={handleChangeTheme} />
      </nav>
      <Card data={info} nomenclature={nom} />
      <Button changeNom={changeDegrees} nomenclature={nom} />
    </div>
  );
}

export default App;
