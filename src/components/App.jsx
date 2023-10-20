import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { LocationPermission } from "./LocationPermission";
import { Title } from "./Title";
import { SearchInput } from "./SearchInput";
import { Card } from "./Card";
import { Button } from "./Button";
import { DarkButton } from "./DarkButton";
import { Footer } from "./Footer";
// import "dotenv/config";

function App() {
  const [info, setInfo] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [nom, setNom] = useState(true);
  const [inputValue, setInputValue] = useState("");
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

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    console.log(inputValue);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=1e097b6bc33647b803b01854a9eb07e2`
      )
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="app w-full h-screen bg-gradient-to-b from-colorP7 to-colorP3 dark:bg-gradient-to-b dark:from-colorP11 dark:to-colorP7 text-colorP3">
      <LocationPermission
        agreementData={locationAgreement}
        visible={isVisible}
      />
      <nav className="appNavContainer">
        <Title />
        <DarkButton themeInfo={handleChangeTheme} />
      </nav>
      <div className="appSearchContainer absolute top-14 outline-none border-none">
        <SearchInput
          handleInputClick={handleSearch}
          handleInputChange={handleInputValue}
        />
      </div>
      <main className="w-full flex justify-center items-center flex-col p-2 mt-10">
        <Card data={info} nomenclature={nom} />
        <Button changeNom={changeDegrees} nomenclature={nom} />
      </main>
      <div className="fixed bottom-1">
        <Footer />
      </div>
    </div>
  );
}

export default App;
