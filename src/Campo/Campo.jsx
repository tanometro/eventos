import styles from "./Campo.module.css";

export default function Campo(props) {
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }
    const {placeholder, required, valor} = props;
    return (
        <div className={styles.inputDiv}>
        <input
        className={styles.input}
        placeholder={placeholder} 
        required={required}
        value={valor}
        onChange={manejarCambio}
          />
        </div>
    )
};