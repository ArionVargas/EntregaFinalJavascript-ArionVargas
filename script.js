// HOLA TUTOR CORRECTOR 

// creacion de productos en ARRAY DE OBJEROS

/* let carrito = []
let total = 0

// JSON 
let carritoGuardado = localStorage.getItem("carrito")

fetch("./info.json")
  .then(respuesta => respuesta.json())
  .then(productos => renderizarProductos(productos,carrito))
  .catch(error => alert())
 */

const productos = [
  { id: 1, nombre: "response", marca: "adidas", precio: 58000, rutaimg: "adidas-response.png", sexo: "hombre", stock: 3 },
  { id: 2, nombre: "grand court", marca: "adidas", precio: 45000, rutaimg: "adidas-grandcourt.png", sexo: "dama", stock: 5 },
  { id: 3, nombre: "streetcheck", marca: "adidas", precio: 49000, rutaimg: "adidas-streetcheck.png", sexo: "dama", stock: 3 },
  { id: 4, nombre: "streetcheck2", marca: "adidas", precio: 49000, rutaimg: "adidas-streetcheck2.png", sexo: "dama", stock: 5 },
  { id: 5, nombre: "ultraboost", marca: "adidas", precio: 74000, rutaimg: "adidas-ultraboost.png", sexo: "hombre", stock: 4 },
  { id: 6, nombre: "pureboost", marca: "adidas", precio: 53000, rutaimg: "adidas-pureboost.png", sexo: "dama", stock: 6 },
  { id: 7, nombre: "hypersonic", marca: "asics", precio: 40000, rutaimg: "asics-hypersonic.png", sexo: "hombre", stock: 6 },
  { id: 8, nombre: "equation", marca: "asics", precio: 36000, rutaimg: "asics-equation.png", sexo: "hombre", stock: 21 },
  { id: 9, nombre: "gel-kamo", marca: "asics", precio: 31000, rutaimg: "asics-gelkamo.png", sexo: "dama", stock: 14 },
  { id: 10, nombre: "nagoya", marca: "asics", precio: 83000, rutaimg: "asics-nagoya.png", sexo: "dama", stock: 3 },
  { id: 11, nombre: "nimbus", marca: "asics", precio: 83000, rutaimg: "asics-nimbus.png", sexo: "dama", stock: 2 },
  { id: 12, nombre: "cumulus", marca: "asics", precio: 65000, rutaimg: "asics-cumulus.png", sexo: "hombre", stock: 11 },
  { id: 13, nombre: "cumulus2", marca: "asics", precio: 65000, rutaimg: "asics-cumulus2.png", sexo: "hombre", stock: 14 },
  { id: 14, nombre: "pacemaker", marca: "asics", precio: 38000, rutaimg: "asics-pacemaker.png", sexo: "dama", stock: 2 },
  { id: 15, nombre: "backhand", marca: "asics", precio: 33000, rutaimg: "asics-backhand.png", sexo: "hombre", stock: 3 },
  { id: 16, nombre: "padel1", marca: "bullpadel", precio: 109000, rutaimg: "bullpadel-padel1.png", sexo: "hombre", stock: 20 },
  { id: 17, nombre: "vertex", marca: "bullpadel", precio: 109000, rutaimg: "bullpadel-vertex.png", sexo: "hombre", stock: 15 },
  { id: 18, nombre: "flow", marca: "bullpadel", precio: 23000, rutaimg: "bullpadel-flow.png", sexo: "dama", stock: 7 },
  { id: 19, nombre: "hybrid", marca: "bullpadel", precio: 125000, rutaimg: "bullpadel-hybrid.png", sexo: "dama", stock: 14 },
  { id: 20, nombre: "gm500sd", marca: "newbalance", precio: 36000, rutaimg: "newbalance-gm500sd.png", sexo: "hombre", stock: 8 },
  { id: 21, nombre: "m520hd", marca: "newbalance", precio: 36000, rutaimg: "newbalance-m520hd.png", sexo: "hombre", stock: 3 },
  { id: 22, nombre: "ml570tb", marca: "newbalance", precio: 49000, rutaimg: "newbalance-ml570tb.png", sexo: "dama", stock: 13 },
  { id: 23, nombre: "gw112c", marca: "newbalance", precio: 36000, rutaimg: "newbalance-gw112c.png", sexo: "dama", stock: 12 },
  { id: 24, nombre: "we1080ll", marca: "newbalance", precio: 37000, rutaimg: "newbalance-we1080ll.png", sexo: "dama", stock: 7 },
  { id: 25, nombre: "charged", marca: "underarmour", precio: 35000, rutaimg: "underarmour-charged.png", sexo: "hombre", stock: 6 },
  { id: 26, nombre: "charged2", marca: "underarmour", precio: 38000, rutaimg: "underarmour-charged2.png", sexo: "hombre", stock: 3 },
  { id: 27, nombre: "pacer", marca: "underarmour", precio: 42000, rutaimg: "underarmour-pacer.png", sexo: "dama", stock: 9 },
  { id: 28, nombre: "cahrged3", marca: "underarmour", precio: 37000, rutaimg: "underarmour-charged3.png", sexo: "hombre", stock: 6 },
  { id: 29, nombre: "vulcraider", marca: "adidas", precio: 46000, rutaimg: "adidas-vulcraider.png", sexo: "dama", stock: 5 },
  { id: 30, nombre: "ultraboostdama", marca: "adidas", precio: 74000, rutaimg: "adidas-ultraboostdama.png", sexo: "dama", stock: 3 },
  { id: 31, nombre: "terrex-soul", marca: "adidas", precio: 69000, rutaimg: "adidas-terrex-soul.png", sexo: "dama", stock: 5 },
  { id: 32, nombre: "terrex", marca: "adidas", precio: 63000, rutaimg: "adidas-terrex.png", sexo: "hombre", stock: 7 },
  { id: 33, nombre: "streetcheckhombre", marca: "adidas", precio: 54000, rutaimg: "adidas-streetcheckhombre.png", sexo: "hombre", stock: 22 },
  { id: 34, nombre: "nmd", marca: "adidas", precio: 58000, rutaimg: "adidas-nmd.png", sexo: "hombre", stock: 10 },
  { id: 35, nombre: "grandcourthombre", marca: "adidas", precio: 41000, rutaimg: "adidas-grandcourthombre.png", sexo: "hombre", stock: 10 }
]

let carrito = []
let total = 0

// JSON 
let carritoGuardado = localStorage.getItem("carrito")

if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado)
}


// DOM 
let buscar = document.getElementById("buscar")
let filtrar = document.getElementById("filtrar")

// EVENTO DE FILTRO 
buscar.addEventListener("click", () => filtrarProductos())

//renderizacion de productos y carrito
renderizarCarrito(carrito)
renderizarProductos(productos, carrito)

//funcion de renderizar y creado de tarjetas
function renderizarProductos(productos, carrito) {
  let contenedor = document.getElementById("contenedor")
  contenedor.innerHTML = ""

  productos.forEach(producto => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "cards"

    tarjeta.innerHTML = `<h3 class=nombreMarca>${producto.marca}<h3>
    <h5 class=nombreZapa>${producto.nombre}</h5>
    <img class=img src=./img_zapas/${producto.rutaimg}>
    <p class=precioZapa>$ ${producto.precio}</p>
    <button class=boton id=${producto.id}>agregar al carrito</button> 
    `
    contenedor.appendChild(tarjeta)

    let botonAgregarAlCarrito = document.getElementById(producto.id)
    botonAgregarAlCarrito.addEventListener("click", (e) => agregarProductoAlCarrito(productos, e))
  })
}

// funcion de agregar productos al carrito
function agregarProductoAlCarrito(productos, e) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []
  let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))
  let productoEnCarrito = carrito.find(producto => producto.id === productoBuscado.id)
  if (productoBuscado.stock > 0) {
    if (productoEnCarrito) {
      productoEnCarrito.unidades++
      productoEnCarrito.subtotal = productoEnCarrito.unidades * productoEnCarrito.precioUnitario
    } else {
      carrito.push({
        rutaimg: productoBuscado.rutaimg,
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio
      })
    }
    productoBuscado.stock--
    localStorage.setItem("carrito", JSON.stringify(carrito))
    tostada(`Producto agregado al carrito`, 1500)
  } else {
    alert("No queda stock del producto seleccionado")
  }
  renderizarCarrito(carrito)
}



//funcion de agregar tarjetas al carrito
function renderizarCarrito(productosEnCarrito) {

  if (productosEnCarrito.length > 0) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    let total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
    let divCarrito = document.getElementById("carrito")
    divCarrito.innerHTML = ""

    productosEnCarrito.forEach(producto => {
      let cardProductoEnCarrito = document.createElement("div")
      cardProductoEnCarrito.innerHTML = `
      <img class=img src=./img_zapas/${producto.rutaimg}>
      <p>${producto.nombre}
      <p>$${producto.precioUnitario}
      <p>${producto.unidades}
      <p>$${producto.subtotal}
      `
      divCarrito.appendChild(cardProductoEnCarrito)

    })
    let botonFinalizar = document.getElementById("botonFinalizar")
    botonFinalizar.addEventListener("click", finalizarCompra)

  }

}



// Funcion finalizar compra
function finalizarCompra() {
  let contenedorCarrito = document.getElementById("carrito")
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []
  contenedorCarrito.innerHTML = ""
  localStorage.removeItem("carrito")
  recalcularTotal(carrito)
  alertaFinalizarCompra(`top-start`, 'Muchas gracias por su compra', "Su total a pagar es:" + " $ " + total, 'success', 2000, false)
}

// Función para recalcular el total
function recalcularTotal(carrito) {
  total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)

}

// funcion alerta de finalizar compra
function alertaFinalizarCompra(position, title, text, icon, timer, showConfirmButton,) {
  Swal.fire({
    position,
    title,
    text,
    icon,
    timer,
    showConfirmButton,
  })
}



//funcion de filtro por marca
function filtrarProductos() {
  let marcaFiltrada = filtrar.value.trim().toLowerCase()
  let productosFiltrados = []
  if (marcaFiltrada === "") {
    productosFiltrados = productos
    alert("La marca ingresada no pertenece a nuestros productos")
  } else {
    productosFiltrados = productos.filter(producto => producto.marca.toLowerCase().includes(marcaFiltrada))
  }
  renderizarProductos(productosFiltrados, carrito)
}

// funcion de alerta de agregado al carrito
function tostada(text, duration) {
  Toastify({
    text,
    duration,
    className: "tostada"
  }).showToast()
}