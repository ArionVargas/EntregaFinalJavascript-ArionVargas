
// HOLA TUTOR CORRECTOR 


// se saluda a nuestro usuario y se le pregunta su nombre

/* function saludar() {
  const nombre = prompt("Hola como va, ingresa tu nombre por favor...")

  if (nombre !== null) {
    const mensaje = "!!Hola, " + nombre + "!! Bienvenido/a a mi tienda"
    alert(mensaje)
  }
}

saludar()

// creacion de productos en ARRAY DE OBJEROS
*/
const productos = [
  { id: 1, nombre: "run falcon", marca: "adidas", material: "tela de avion", precio: 15000, stock: 3 },
  { id: 2, nombre: "ultraboost", marca: "adidas", material: "tela de avion", precio: 25000, stock: 5 },
  { id: 3, nombre: "cortez", marca: "nike", material: "cuero", precio: 20000, stock: 2 },
  { id: 4, nombre: "jordan", marca: "nike", material: "cuero", precio: 35000, stock: 1 },
  { id: 5, nombre: "kayano", marca: "asics", material: "tela engomada", precio: 17000, stock: 4 },
  { id: 6, nombre: "nimbus", marca: "asics", material: "tela engomada", precio: 17000, stock: 1 },
  { id: 7, nombre: "bmw", marca: "puma", material: "cuero", precio: 15000, stock: 6 }
]

// me costo entender que la variable carrito se debe llamar antes de las opciones jaja
/*
const carrito = []

// funcion de opciones para usuario mediante DO WHILE

let opcion

do {
  opcion = Number(prompt("Seleccioná alguna de las siguientes opciones:\n1 - Ver lista de productos\n2 - Buscar producto por marca\n3 - Buscar producto por id\n4 - Filttrar productos\n5 - Agregar producto al carrito\n6 - Finalizar compra\n 0 - Salir"))
  switch (opcion) {
    case 1:
      const listaProductos = listar(productos)

      if (listaProductos) {
        alert("Estos son los productos que tenemos para ofrecerte:\n\n" + listaProductos)
      } else {
      }

      break

    case 2:
      const marcaBuscada = prompt("Que marca en especifico buscas ? ingresala aqui por favor:").toLowerCase()
      const productosEncontrados = productoPorMarca(productos, marcaBuscada)
      if (productosEncontrados.length > 0) {
        alert(`Productos con la marca "${marcaBuscada}":\n\n${productosEncontrados.join("\n")}`)
      } else {
        alert("No hay productos con esa marca")

      }
      break

    case 3:
      buscarPorId()
      break
    case 4:

      const precioMinimo = parseFloat(prompt("Ingrese el precio mínimo para filtrar productos por favor: "))
      const productosFiltrados = filtrar(productos, precioMinimo)
      if (productosFiltrados.length > 0) {
        alert(`Productos con precio mayor a $${precioMinimo}:\n\n${productosFiltrados.map(producto => `Nombre: ${producto.nombre} Marca: ${producto.marca} Precio: $${producto.precio}`).join("\n")}`)
      } else {
        alert("No hay productos que cumplan con el filtro especificado.")
      }
      break
    case 5:
      agregarAlCarrito()
      break
    case 6:
      mostrarCarrito(carrito)
      break
  }
} while (opcion != 0){
  alert ("!!!Muchas gracias por visitarnos vuelva pronto por favor!!!")
}

// funcion listar productos


function listar(productos) {

  let lista = ""
  productos.forEach(producto => {
    lista += `ID: ${producto.id} Marca: ${producto.marca} Nombre: ${producto.nombre} Precio: $${producto.precio}\n`
  })
  return (lista)
}


// funcion para buscar producto por marca

function productoPorMarca(productos, marca) {
  const productosEncontrados = []

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    if (producto.marca.toLowerCase() === marca) {
      productosEncontrados.push(`ID: ${producto.id}, Nombre: ${producto.nombre}, Marca: ${producto.marca}, Precio: $${producto.precio}`)

    }
  }

  return productosEncontrados
}

// funcion buscar por id con FIND

function buscarPorId() {
  const idProducto = parseInt(prompt("Ingrese el ID del producto que desea buscar: "))
  const productoEncontrado = productos.find(producto => producto.id === idProducto)

  if (productoEncontrado) {
    alert(`Producto encontrado\n Nombre: ${productoEncontrado.nombre}\n Marca: ${productoEncontrado.marca}\n Precio: $${productoEncontrado.precio}\n`)
    return productoEncontrado
  } else {

    return null
  }
}

// funcion agregar al carrito

function agregarAlCarrito() {
  const productoAgregado = buscarPorId()

  if (productoAgregado !== null) {
    carrito.push(productoAgregado)
    alert(`${productoAgregado.nombre} con el precio de $${productoAgregado.precio} se ha agregado al carrito.`)
  } else {
    alert("Producto no agregado al carrito, Verifique el ID ingresado por favor.")
  }

}

// funcion filtrar utilizando FILTER

function filtrar(productos, precioMinimo) {
  return productos.filter(producto => producto.precio > precioMinimo)
}

// finalizar compra y sumar productos 
function mostrarCarrito(carrito) {

  if (carrito.length === 0) {
    alert("El carrito está vacío. No se han agregado productos.")
  } else {
    let mensajeCarrito = "Productos en el carrito:\n"
    let total = 0
    carrito.forEach(producto => {
      mensajeCarrito += `Nombre: ${producto.nombre}, Marca: ${producto.marca}, Precio: $${producto.precio}\n`
      total += producto.precio
    })
    mensajeCarrito += `Total a pagar: $${total}`
    alert(mensajeCarrito)
  }
} */

// MUCHAS GRACIAS Y ESPERO SU DEVOLUCION PARA MEJORAR 

// DOM 

let contenedor = document.getElementById("contenedor")

contenedor.innerHTML += "<div class=tarjetas> zapa 1<div>"
contenedor.innerHTML += "<div class=tarjetas> zapa 2<div>"
contenedor.innerHTML += "<div class=tarjetas> zapa 3<div>"

