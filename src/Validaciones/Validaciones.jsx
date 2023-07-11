function validarNombre(nombre) {
    if(nombre.length < 3) {
        return {
            name: {
                error: false, 
                message: "NADIE TIENE UN NOMBRE MENOR A 3 LETRAS BOLU",
            },
        }
    }else {
        return {
        name: {
            error: true, 
            message: "MÍINIMO 3 LETRAS PAPA FRITA"
        },
    }
   }
} 

function validarDni(dni) {
    if(dni.length < 7 || dni.length > 9) {
        return {
            dni: {
                error: false, 
                message: "EL DNI SON 7 NUMEROS Y NO MAS DE 9",
            },
        }
    }
} 