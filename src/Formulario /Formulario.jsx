import Campo from "../Campo/Campo";
import Boton from "../Boton/Boton";
import { useState } from "react";
import styles from "./Formulario.module.css";

export default function Registro (props) {
    const [nombres, setNombres] = useState();
    const [apellido, setApellido] = useState();
    const [dni, setDni] = useState();
    const [email, setEmail] = useState();
    const [dias, setDias] = useState();

    const {registrarAsistente} = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnviar = {
            nombres,
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
            valor={apellido} 
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
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select> 
            <Boton>
                Agregar asistente
            </Boton>

        </form>
        </section>
        
    )
}