import Campo from "../Campo/Campo";
import Boton from "../Boton/Boton";
import { useState } from "react";
import styles from "./Formulario.module.css";

export default function Registro (props) {
    const {registrarAsistente} = props;
  
    const [nombres, setNombres] = useState();
    const [apellidos, setApellido] = useState();
    const [dni, setDni] = useState();
    const [email, setEmail] = useState();
    const [dias, setDias] = useState();

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnviar = {
            nombres,
            apellidos,
            dni,
            email,
            dias
        }
    registrarAsistente(datosEnviar)
    }

    return (
        <section className={styles.formulario}>
        <form onSubmit={manejarEnvio} >
            <h1>Registro asistentes</h1>
            <Campo
            placeholder="Nombre/s" 
            required
            valor={nombres} 
            setValor={setNombres}
            />
            <Campo
            placeholder="Apellido/s" 
            required
            valor={apellidos} 
            setValor={setApellido}
            />
            <Campo
            placeholder="DNI"
            required 
            valor={dni} 
            setValor={setDni}
            />
            <Campo 
            placeholder="Email" 
            required
            valor={email} 
            setValor={setEmail}/>
            <select 
            valor={dias}
            setValor={setDias}>
              <option value="">Seleccionar</option>
              <option value="opcion1">1 Día</option>
              <option value="opcion2">2 Día</option>
              <option value="opcion3">3 Días</option>
            </select> 
            <Boton>
                Agregar asistente
            </Boton>

        </form>
        </section>
        
    )
}