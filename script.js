
let carrito = []

fetch("./info.json")
  .then(respuesta => respuesta.json())
  .then(productos => principal(productos))
  .catch(error => alert(error))

function principal(productos) {

  let carritoGuardado = localStorage.getItem("carrito")
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado)
  }
  let total = 0
  renderizarCarrito(carrito, total)
  renderizarProductos(productos, carrito)
  let buscar = document.getElementById("buscar")

  buscar.addEventListener("click", () => filtrarProductos(productos))

}


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
    tostada(`Producto agregado al carrito`, 1000)
  } else {
    alert("No queda stock del producto seleccionado")
  }
  renderizarCarrito(carrito)
}




function renderizarCarrito(productosEnCarrito, total) {

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


function finalizarCompra() {
  let contenedorCarrito = document.getElementById("carrito")
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []
  contenedorCarrito.innerHTML = ""
  let total = recalcularTotal(carrito)

  localStorage.removeItem("carrito")
  carrito = []
renderizarCarrito(carrito,total)
  alertaFinalizarCompra(`top-start`, 'Muchas gracias por su compra', "Su total a pagar es:" + " $ " + total, 'success', 2000, false)
}


function recalcularTotal(carrito) {
  total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
  return total
}


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



function filtrarProductos(productos) {
  let marcaFiltrada = filtrar.value.trim().toLowerCase()
  let productosFiltrados = []
  if (marcaFiltrada === "") {
    productosFiltrados = productos
    alert("La marca ingresada no pertenece a nuestros productos")
  } else {
    productosFiltrados = productos.filter(producto => producto.marca.toLowerCase().includes(marcaFiltrada))
  }
  renderizarProductos(productosFiltrados)
}


function tostada(text, duration) {
  Toastify({
    text,
    duration,
    className: "tostada"
  }).showToast()
}