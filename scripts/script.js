const inventario = [
    { id: 1, nombre: "Camiseta", cantidad: 50, precio: 15 },
    { id: 2, nombre: "Pantalones", cantidad: 30, precio: 30 },
    { id: 3, nombre: "Zapatos", cantidad: 20, precio: 50 },
];

// agrega el producto introducido (nombre, cantidad y precio)
function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    inventario.push({ nombre, cantidad, precio });
}

// busca el producto según el nombre introducido
function buscarProducto() {
    const nombreBusqueda = document.getElementById("nombreBusqueda").value;
    for (const producto of inventario) {
        if (producto.nombre === nombreBusqueda) {
            document.getElementById("resultadoBusqueda").textContent = `Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: $${producto.precio}`;
            return;
        }
    }
    document.getElementById("resultadoBusqueda").textContent = "Producto no encontrado";
}

// actualiza el inventario cambiándole el nombre, la cantidad y el precio del producto elegido
function actualizarInventario() {
    const nombreActualizar = document.getElementById("nombreActualizar").value;
    const cantidadActualizar = parseInt(document.getElementById("cantidadActualizar").value);
    const precioActualizar = parseFloat(document.getElementById("precioActualizar").value);

    for (const producto of inventario) {
        if (producto.nombre === nombreActualizar) {
            producto.cantidad += cantidadActualizar;
            producto.precio = precioActualizar;
            return;
        }
    }
    // Si el producto no existe lo añade
    inventario.push({ nombre: nombreActualizar, cantidad: cantidadActualizar, precio: precioActualizar });
}

// eliminar el producto
function eliminarProducto() {
    const nombreEliminar = document.getElementById("nombreEliminar").value;
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombreEliminar) {
            inventario.splice(i, 1);
            i--; // actualiza el índice del producto
        }
    }
}
 // mostrar el inventario completo
function mostrarInventario() {
    const resultadoInventario = document.getElementById("resultadoInventario");
    resultadoInventario.innerHTML = "INVENTARIO:<br>";
    for (const producto of inventario) {
        resultadoInventario.innerHTML += `Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: $${producto.precio} €<br>`;
    }
}
