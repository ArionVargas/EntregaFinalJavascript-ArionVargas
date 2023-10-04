// HOLA TUTOR CORRECTOR 

// creacion de productos en ARRAY DE OBJEROS

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

    tarjeta.innerHTML = `<h3 class=nombreZapa>${producto.nombre}</h3>
    <img class=img src=./img_zapas/${producto.rutaimg}>
    <p class=precioZapa>$ ${producto.precio}</p>
    <button class=boton id=${producto.id}>agregar al carrito</button> 
    `
    contenedor.appendChild(tarjeta)

    let botonAgregarAlCarrito = document.getElementById(producto.id)
    botonAgregarAlCarrito.addEventListener("click", (e) => agregarProductoAlCarrito(productos, carrito, e))
  })
}

// funcion de agregar productos al carrito
function agregarProductoAlCarrito(productos, carrito, e) {
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
  } else {
    alert("No queda stock del producto seleccionado")
  }
  renderizarCarrito(carrito)
}



//funcion de agregar tarjetas al carrito
function renderizarCarrito(productosEnCarrito) {
  
  if (productosEnCarrito.length > 0) {
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

//

// Funcion finalizar compra

function finalizarCompra() {
  let carrito = document.getElementById("carrito")
  carrito.innerHTML = ""
  localStorage.removeItem("carrito")
  recalcularTotal()
  alert("MUCHAS GRACIAS POR SU COMPRA EL TOTAL A PAGAR ES: $" + total)
}

// Función para recalcular el total
function recalcularTotal() {
  total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0);
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

