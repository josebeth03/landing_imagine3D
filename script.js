const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

// SHOP

let carrito = []

const containerCarrito = $(".containerCarrito")

if (carrito.length === 0) {
  containerCarrito.toggle()
}


 const botonAgregar = $(".buttonAgregar")


 botonAgregar.on("click", function () {
    const productoElemento = $(this).closest("li").find("img")[0].alt;
    
    agregarAlcarrito(productoElemento)
    
  })


  const agregarAlcarrito = (nombreProducto) => {
    const producto = {
      nombre: nombreProducto,
      cantidad: 1,
    }

    const indice = carrito.findIndex((item) => item.nombre === producto.nombre)

    console.log(indice)

    if(indice === -1) {
      carrito.push(producto)
    }else {
      carrito[indice].cantidad += 1;
    }
    
    if (carrito.length > 0) {
      containerCarrito.toggle(true)
    }    
    pintarCarrito()
  }
  
  const pintarCarrito = ()=> {
    const cantidad = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0 )
    document.querySelector(".cantidad").textContent = cantidad
  }
  
