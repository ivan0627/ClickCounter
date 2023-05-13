import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {
  
  const [numClicks, setNumCicks] = useState(0);

   const manejarClick = () =>{
      setNumCicks(numClicks+1);
  };

  const reiniciarContador =() => {
    setNumCicks(0);
  };

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks}
        />

        <Boton 
          texto="Click"
          esBotondeClick = {true} 
          manejarClick = {manejarClick}
        />

        <Boton 
          texto="Reiniciar"
          esBotondeClick = {false} 
          manejarClick = {reiniciarContador}
        />
      </div>

    </div>
  )
}

export default App