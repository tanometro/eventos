import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Registro from './Formulario /Formulario';
import Lista from './ListaAs/Lista';
import Navbar from './NavBar/Navbar.jsx';

function App() {
  const [asistentes, actualizarAsistentes] = useState([]);

  const registrarAsistente = (asistente) => {
    const nuevoAsistente = { ...asistente};
    actualizarAsistentes([...asistentes, asistente])
  }
  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Registro
      registrarAsistente={registrarAsistente}/>}/>
      <Route path="/lista" element={<Lista/>}/>
    </Routes>
    </div>
  );
}

export default App;
