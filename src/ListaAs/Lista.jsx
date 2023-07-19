import styles from "./Lista.module.css";
import Registro from "./Registro";

export default function Lista (props) {
    const {asistentes, email} = props;

    return (
        <div className={styles.asistentesList}>
            <div className={styles.asistentesListHeader}>
                <div className={styles.column}>Nombre</div>
                <div className={styles.column}>Apellido</div>
                <div className={styles.column}>DNI</div>
                <div className={styles.column}>Email</div>
                <div className={styles.column}>Días</div>
            </div>
            <div>
                {asistentes.map((asistente) => {
                    <Registro key={email}/>
                })}
                
            </div>
        </div>
     

    )
}