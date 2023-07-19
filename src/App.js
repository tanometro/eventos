import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login/Login';
import Registro from './Formulario/Formulario';
import Lista from './ListaAs/Lista';
import Navbar from './NavBar/Navbar.jsx';

function App() {
  const [asistentes, actualizarAsistentes] = useState([{
    nombres: "Angelo Grillo",
    email: "angelo@gmail.com",
    dni: "36552942",
    dias: "1"
  }]);

  const registrarAsistente = (asistente) => {
    const nuevoAsistente = { ...asistente};
    actualizarAsistentes([...asistentes, asistente])
  }

  const [access, setAccess] = useState(false);
  const EMAIL = 'a@gmail.com';
  const PASSWORD = 'Pass123';
  const navigate = useNavigate();


  const login = (userData) => {
     if(EMAIL == userData.email && PASSWORD == userData.password) {
        setAccess(true);
        navigate("/home");
     }
  }
 
  useEffect(() => {
     !access && navigate('/');
  }, [access]);

  const location = useLocation();

  return (
    <div className='App'>
    {/*{location.pathname !== "./" && <Navbar/>}}*/}
    {location.pathname !=='/' && <Navbar/>}
    <Routes>
      <Route path="/" element={<Login login={login}/>}/>
      <Route path="/home" element={<Registro
      registrarAsistente={registrarAsistente}/>}/>
      <Route path="/lista" element={<Lista asistentes={asistentes} />}/>
    </Routes>
    </div>
  );
}

export default App;
