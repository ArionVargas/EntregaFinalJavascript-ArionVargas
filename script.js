
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
  { id: 1, nombre: "response", marca: "adidas", precio: 58000, rutaimg: "adidas-response.jpg", sexo: "hombre", stock: 3 },
  { id: 2, nombre: "grand court", marca: "adidas", precio: 45000, rutaimg: "adidas-grandcourt.jpg", sexo: "dama", stock: 5 },
  { id: 3, nombre: "streetcheck", marca: "adidas", precio: 49000, rutaimg: "adidas-streetcheck.jpg", sexo: "dama", stock: 2 },
  { id: 4, nombre: "streetcheck2", marca: "adidas", precio: 49000, rutaimg: "adidas-streetcheck2.jpg", sexo: "dama", stock: 1 },
  { id: 5, nombre: "ultraboost", marca: "adidas", precio: 74000, rutaimg: "adidas-ultraboost.jpg", sexo: "hombre", stock: 4 },
  { id: 6, nombre: "pureboost", marca: "adidas", precio: 53000, rutaimg: "adidas-pureboost.jpg", sexo: "dama", stock: 1 },
  { id: 7, nombre: "hypersonic", marca: "asics", precio: 40000, rutaimg: "asics-hypersonic.jpg", sexo: "hombre", stock: 6 },
  { id: 8, nombre: "equation", marca: "asics", precio: 36000, rutaimg: "asics-equation.jpg", sexo: "hombre", stock: 1 },
  { id: 9, nombre: "gel-kamo", marca: "asics", precio: 31000, rutaimg: "asics-gelkamo.jpg", sexo: "dama", stock: 1 },
  { id: 10, nombre: "nagoya", marca: "asics", precio: 83000, rutaimg: "asics-nagoya.jpg", sexo: "dama", stock: 1 },
  { id: 11, nombre: "nimbus", marca: "asics", precio: 83000, rutaimg: "asics-nimbus.jpg", sexo: "dama", stock: 1 },
  { id: 12, nombre: "cumulus", marca: "asics", precio: 65000, rutaimg: "asics-cumulus.jpg", sexo: "hombre", stock: 1 },
  { id: 13, nombre: "cumulus2", marca: "asics", precio: 65000, rutaimg: "asics-cumulus2.jpg", sexo: "hombre", stock: 1 },
  { id: 14, nombre: "pacemaker", marca: "asics", precio: 38000, rutaimg: "asics-pacemaker.jpg", sexo: "dama", stock: 1 },
  { id: 15, nombre: "backhand", marca: "asics", precio: 33000, rutaimg: "asics-backhand.jpg", sexo: "hombre", stock: 1 },
  { id: 16, nombre: "padel1", marca: "bullpadel", precio: 109000, rutaimg: "bullpadel-padel1.jpg", sexo: "hombre", stock: 1 },
  { id: 17, nombre: "vertex", marca: "bullpadel", precio: 109000, rutaimg: "bullpadel-vertex.jpg", sexo: "hombre", stock: 1 },
  { id: 18, nombre: "flow", marca: "bullpadel", precio: 23000, rutaimg: "bullpadel-flow.jpg", sexo: "dama", stock: 1 },
  { id: 19, nombre: "hybrid", marca: "bullpadel", precio: 125000, rutaimg: "bullpadel-hybrid.jpg", sexo: "dama", stock: 1 },
  { id: 20, nombre: "gm500sd", marca: "newbalance", precio: 36000, rutaimg: "newbalance-gm500sd.jpg", sexo: "hombre", stock: 1 },
  { id: 21, nombre: "m520hd", marca: "newbalance", precio: 36000, rutaimg: "newbalance-m520hd.jpg", sexo: "hombre", stock: 1 },
  { id: 22, nombre: "ml570tb", marca: "newbalance", precio: 49000, rutaimg: "newbalance-ml570tb.jpg", sexo: "dama", stock: 1 },
  { id: 23, nombre: "gw112c", marca: "newbalance", precio: 36000, rutaimg: "newbalance-gw112c.jpg", sexo: "dama", stock: 1 },
  { id: 24, nombre: "we1080ll", marca: "newbalance", precio: 37000, rutaimg: "newbalance-we1080ll.jpg", sexo: "dama", stock: 1 },
  { id: 25, nombre: "charged", marca: "underarmour", precio: 35000, rutaimg: "underarmour-charged.jpg", sexo: "hombre", stock: 1 },
  { id: 26, nombre: "charged2", marca: "underarmour", precio: 38000, rutaimg: "underarmour-charged2.jpg", sexo: "hombre", stock: 1 },
  { id: 27, nombre: "pacer", marca: "underarmour", precio: 42000, rutaimg: "underarmour-pacer.jpg", sexo: "dama", stock: 1 },
  { id: 28, nombre: "cahrged3", marca: "underarmour", precio: 37000, rutaimg: "underarmour-charged3.jpg", sexo: "hombre", stock: 1 },
]

renderizarProductos(productos)

function renderizarProductos(productos) {
  let contenedor = document.getElementById("contenedor")
  contenedor.innerHTML = ""

  productos.forEach(producto => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "cards"

    tarjeta.innerHTML = `<h3 class=nombreZapa>${producto.nombre}</h3>
    <img class=img src=./img_zapas/${producto.rutaimg}>
    <p class=precioZapa>$ ${producto.precio}</p>
    <button class=boton>agregar al carrito</button> 
    `
    contenedor.appendChild(tarjeta)
  })
}

let buscar = document.getElementById("buscar")
let filtrar = document.getElementById("filtrar")

buscar.addEventListener("click", () => filtrarProductos(productos))

function filtrarProductos(productos) {
  let productosFiltrados = productos.filter(producto => producto.marca.includes(filtrar.value))
  renderizarProductos(productosFiltrados)
}










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


