function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  let añoActual = new Date().getFullYear()

  let fechaNacimientoNew = fechaNacimiento.getFullYear()

  console.log(añoActual)
  console.log(fechaNacimientoNew)

  if (añoActual - fechaNacimientoNew >= "18") {
    return(true)
  } 
  
  else if (añoActual - fechaNacimientoNew <= "18") {
    return(false)
  }
}

module.exports = esMayorDeEdad;