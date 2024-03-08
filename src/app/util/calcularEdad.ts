function calcularEdad(fechaNacimiento: Date): number {
  const ahora = new Date()
  const añoNacimiento = fechaNacimiento.getFullYear()
  const añoActual = ahora.getFullYear()
  const mesNacimiento = fechaNacimiento.getMonth()
  const mesActual = ahora.getMonth()

  if (mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && ahora.getDay() < fechaNacimiento.getDay())
  ) {
    return añoActual - añoNacimiento - 1
  }
  return añoActual - añoNacimiento
}

export { calcularEdad }