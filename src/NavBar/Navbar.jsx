import { NavLink } from "react-router-dom";
import Lista from "../ListaAs/Lista";
import styles from "./NavBar.module.css"
import Contador from "../Contador/Contador";

export default function Navbar () {
    return (
        <div className={styles.navDiv} >
            <NavLink to="/">
                <span>Inicio</span>
            </NavLink>
            <NavLink to="/lista">
                <span>Lista</span>
            </NavLink>
            <Contador/>
        </div>
    )
}

