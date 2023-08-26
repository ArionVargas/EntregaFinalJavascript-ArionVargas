/* bienvenido/a tutor ,en este programa intento simplificar la solicitud
de un prestamo a un banco online para que el usuario tenga una 
experiencia agradable y simple, espero sus criticas constructivas
,desde ya muchas gracias . Saludos Arion. */

let continuar = true

while (continuar) {
  let nombre = prompt("!Hola futuro socio! Ingresa tu nombre por favor.")
  alert("Bienvenido/a " + nombre + ", a nuestro Banco Online. Aqui podrás solicitar tu prestamo de una manera fácil. Preciona aceptar por favor.")


  // Función para solicitar un monto válido al usuario
  function solicitarMonto() {
    let monto = parseFloat(prompt("Ingrese el monto que solicita por favor no ingrese puntos ni comas:"))
    if (isNaN(monto)) {
      alert("El monto ingresado no es válido ingrese nuevamente por favor.")
      return solicitarMonto() // Vuelve a solicitar si el monto no es válido
    }
    return monto;
  }



  // Definir el monto total y el interés fijo en decimales

  const montoTotal = solicitarMonto();
  const tasasInteres = {
    12: 0.6,
    24: 0.9,
    48: 1.8
  }

  let cuotas

  // pedirle la cantidad de cuotas al usuario usando un bucle do while

  do {
    cuotas = parseInt(prompt("Estas son las opciones disponibles por el momento, recuerde que debido a la suba del dolar pueden variar dia a dia. " + "Ingrese la cantidad de cuotas por favor (12, 24, 48):"))

    if (!tasasInteres.hasOwnProperty(cuotas)) {
      alert("Opción de cuotas no válida. Por favor, elija 12, 24 o 48 cuotas.")
    }

  } while (!tasasInteres.hasOwnProperty(cuotas))

  alert("Muchas gracias estamos calculando su solicitud en breve le informaremos...")

  // Calcular el interés total según la tasa de interés correspondiente

  const montoInteres = montoTotal * tasasInteres[cuotas]

  // Calcular el monto de cada cuota

  const montoCuota = (montoTotal + montoInteres) / cuotas

  // Mostrar el monto de cada cuota y el interés total
  alert(`!Nos complase informarle que su solicitud fue aceptada.! El monto total de su cuota es de: ${montoCuota.toFixed(2)}`)
  alert(`El monto mas interés total a pagar es: ${(montoTotal + montoInteres).toFixed(2)}`)

  const respuesta = prompt("¿Deseas consultar otro monto? (Sí / No)").toLowerCase()
  continuar = respuesta === "sí" || respuesta === "si"
}

alert("Gracias por elegirnos. Recuerde su consulta no molesta ¡Hasta la proxima!")
