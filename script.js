/* bienvenido/a tutor ,en este programa intento simplificar la solicitud
de un prestamo a un banco online para que el usuario tenga una 
experiencia agradable y simple, espero sus criticas constructivas
,desde ya muchas gracias . Saludos Arion. */

/* let continuar = true

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

alert("Gracias por elegirnos. Recuerde su consulta no molesta ¡Hasta la proxima!") */


// arrays

/* let numeros = [3 , 1 , 6 ,8] */
// elementos 4 _0 1 2 3 4
// indices de 0 hsta numero.length -1

/* console.log(numeros) */
/*  let nombre = prompt("ingrese nombre")
let apellido = prompt("ingrese apellido")
let edad = Number( prompt("ingrese edad"))
let auto = prompt("ingrese modelo de auto") */

/* console.log(persona) */
/* let persona = {
  nombre: "arion",
  apellido:"vargas" ,
  edad: 31 ,
  auto: "gol"
}

console.log (persona.nombre)

persona.edad = 32

console.log (persona.edad)

let gente = ["carlos" , "mamana", 25 ,]

console.log(gente,[1]) */


/* function pediNombre() {
  let nombre = prompt("Ingrese su nombre")
  return ("bienvenido " + nombre)
}

console.log(pediNombre()) */
/* 
for (let i = 0; i < personasFila; i++) {
  alert ("su numero de fila es: " + personasFila )
} */
/* function pedirNombre() {
  let nombre = prompt("ingrese nombre")
  alert("el alumno se llama: " + nombre)
}

pedirNombre() */

// luego borrar 

/* const productos = [
  { id: 1, nombre: "Producto A", precio: 10 },
  { id: 2, nombre: "Producto B", precio: 20 },
  { id: 3, nombre: "Producto C", precio: 15 },
  { id: 4, nombre: "Producto D", precio: 25 },
];

const carrito = [];

function mostrarMenu() {
  alert("\n Menú :" + " Mostrar productos /n1" + " Agregar producto al carrito /n2,n3 Buscar producto por ID, /n4 Finalizar")
  alert("1. Mostrar productos")
  alert("2. Agregar producto al carrito")
  alert("3. Buscar producto por ID")
  alert("4. Finalizar")

  const opcion = prompt("Por favor, seleccione una opción: ")
  switch (opcion) {
    case "1":
      mostrarProductos()
      break;
    case "2":
      agregarAlCarrito()
      break;
    case "3":
      buscarPorId()
      break;
    case "4":
      alert("Gracias por usar nuestro programa. ¡Hasta luego!")
      return;
    default:
      alert("Opción no válida. Por favor, seleccione una opción válida.")
  }

  mostrarMenu()
}

function mostrarProductos() {
  alert("\nProductos disponibles:")
  productos.forEach((producto) => {
    alert(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`)
  })
}

function agregarAlCarrito() {
  const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito: "))
  const productoEncontrado = productos.find((producto) => producto.id === idProducto)

  if (productoEncontrado) {
    carrito.push(productoEncontrado);
    alert(`${productoEncontrado.nombre} se ha agregado al carrito.`)
  } else {
    alert("Producto no encontrado. Verifique el ID ingresado.")
  }
}

function buscarPorId() {
  const idProducto = parseInt(prompt("Ingrese el ID del producto que desea buscar: "))
  const productoEncontrado = productos.find((producto) => producto.id === idProducto)

  if (productoEncontrado) {
    alert(`Producto encontrado - Nombre: ${productoEncontrado.nombre}, Precio: $${productoEncontrado.precio}`)
  } else {
    alert("Producto no encontrado. Verifique el ID ingresado.")
  }
}

mostrarMenu()
*/
// HOLA TUTOR CORRECTOR , ESTA ES MI SEGUNDA PRE ENTREGA 


function saludar() {
  const nombre = prompt("Hola como va, ingresa tu nombre por favor...")
  if (nombre !== null) {
    const mensaje = "!!Hola, " + nombre + "!! Bienvenido/a a mi tienda"
    alert (mensaje)
  }
}

saludar()

const productos = [
  {
    id: 1,
    nombre: "run falcon",
    marca: "adidas",
    material: "tela de avion",
    precio: 15000,
    stock: 3
  },
  {
    id: 2,
    nombre: "ultraboost",
    marca: "adidas",
    material: "tela de avion",
    precio: 25000,
    stock: 5
  },
  {
    id: 3,
    nombre: "cortez",
    marca: "nike",
    material: "cuero",
    precio: 20000,
    stock: 2
  },
  {
    id: 4,
    nombre: "jordan",
    marca: "nike",
    material: "cuero",
    precio: 35000,
    stock: 1
  },
  {
    id: 5,
    nombre: "kayano",
    marca: "asics",
    material: "tela engomada",
    precio: 17000,
    stock: 4
  },
  {
    id: 6,
    nombre: "nimbus",
    marca: "asics",
    material: "tela engomada",
    precio: 17000,
    stock: 1
  },
  {
    id: 7,
    nombre: "bmw",
    marca: "puma",
    material: "cuero",
    precio: 15000,
    stock: 6
  }
]



let elegirMarca = prompt("ingrese marca que desea encontrar").toLowerCase()



let productosEncontrados = []

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];
  if (producto.marca.toLowerCase() === elegirMarca) {
    productosEncontrados.push(`Nombre: ${producto.nombre}, Marca: ${producto.marca}, Precio: $${producto.precio}`)
  }
}

if (productosEncontrados.length > 0) {
  alert(`Productos con la marca "${elegirMarca}":\n\n${productosEncontrados.join("\n")}`)
} else {
  alert(`No se encontraron productos con la marca "${elegirMarca}".`)
}
