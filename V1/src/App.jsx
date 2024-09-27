import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Cabecera from './Header/Cabecera';
import Main from './Main/Main';
import Micuenta from './MiCuenta/Micuenta';

function App() {

  const location = useLocation(); // Obtener la ubicación actual


  return (
    <>

      <Cabecera />
      <Routes>
        <Route path="/Micuenta" element={<Micuenta />} />
      </Routes>
      {/* Mostrar Main solo si no estamos en la ruta /Micuenta */}
      {location.pathname !== '/Micuenta' && <Main />}

      <Footer />



    </>
  )
}

export default App
