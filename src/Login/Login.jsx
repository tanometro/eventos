import { useState } from "react";
import styles from "./Login.module.css";
import Campo from "../Campo/Campo";
import Boton from "../Boton/Boton";
import validations from "../Validaciones/Validaciones";

export default function Login (props) {
   const {login} = props;

   const [userData, setUserData] = useState({
      email: "",
      password: ""
   })

   const [errors, setErrors] = useState({
      email: "",
      password: ""
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      login(userData);
   }

   const handleChange = (e) => {
      const property = e.target.name;
      const value = e.target.value;

      setUserData({...userData, [property]: value})
      setErrors(validations({...userData, [property] : value}));

  }

   return (

      <form onSubmit={handleSubmit}>
         <Campo
         name="email"
         type="text"
         className={styles.input}
         placeholder={"Ingresa el Email porfa"} 
         required
         valor={userData.email}
         cambio={handleChange}
         />
         <p>{errors.email}</p>
         <Campo
         name="password"
         type="text" 
         className={styles.input} 
         placeholder={"Ingresa tu password bro"} 
         required
         valor={userData.password}
         cambio={handleChange}
         />
         <p>{errors.password}</p>
         <Boton>
            Ingresar
         </Boton>
      </form>
   )
}
