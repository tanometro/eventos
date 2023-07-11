import styles from "./Lista.module.css";
import { useState } from "react";

export default function Lista (props) {
    const [asistentes, setAsistentes] = useState();
    return (
        <div className={styles.asistentes-list}>
            <div className={styles.asistentes-list-header}>
                <div className={styles.column}>Nombre</div>
                <div className={styles.column}>Apellido</div>
                <div className={styles.column}>DNI</div>
                <div className={styles.column}>Email</div>
                <div className={styles.column}>Días</div>
            </div>
            
                <div className={styles.asistente} key={123}>
                <div className={styles.column}>Asistente.nombre</div>
                <div className={styles.column}>Asistente.apellido</div>
                <div className={styles.column}>Asistente.dni</div>
                <div className={styles.column}>Asistente.email</div>
                <div className={styles.column}>Asistente.dias</div>
        </div>
     
    </div>
    )
}