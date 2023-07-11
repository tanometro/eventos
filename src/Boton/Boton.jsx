import styles from "./Boton.module.css";

export default function Boton(props) {
    return (
        <button className={styles.boton} >{props.children}</button>
    )
}