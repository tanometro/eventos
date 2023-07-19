import styles from "./Campo.module.css";
import validations from "../Validaciones/Validaciones";

export default function Campo(props) {

    const {name, type, placeholder, required, valor, cambio} = props;
    
    return (
        <div className={styles.inputDiv}>
        <input
        name={name}
        type={type}
        className={styles.input}
        placeholder={placeholder} 
        required={required}
        value={valor}
        onChange={cambio}
          />
        </div>
    )
};