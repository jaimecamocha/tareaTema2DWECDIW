// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/tareaTema2DWECDIW.git

const inventario = [
    { id: 1, nombre: "Camiseta", cantidad: 50, precio: 15 }, 
    { id: 2, nombre: "Pantalones", cantidad: 30, precio: 30 },
    { id: 3, nombre: "Zapatos", cantidad: 20, precio: 50 },
];

let tablaVisible = false;

function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    inventario.push({ nombre, cantidad, precio });

    mostrarInventario(); 
}

function buscarProducto() {
    const nombreBusqueda = document.getElementById("nombreBusqueda").value;
    for (const producto of inventario) {
        if (producto.nombre === nombreBusqueda) {
            document.getElementById("resultadoBusqueda").textContent = `Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: ${producto.precio} €`;
            return;
        }
    }
    document.getElementById("resultadoBusqueda").textContent = "Producto no encontrado";
}

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

    inventario.push({ nombre: nombreActualizar, cantidad: cantidadActualizar, precio: precioActualizar });
    mostrarInventario();
}

function eliminarProducto() {
    const nombreEliminar = document.getElementById("nombreEliminar").value;
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombreEliminar) {
            inventario.splice(i, 1);
            i--;
        }
    }

    mostrarInventario();
}

function mostrarInventario() {
    const tbodyInventario = document.getElementById("tbodyInventario");
    tbodyInventario.innerHTML = "";

    for (const producto of inventario) {
        const row = tbodyInventario.insertRow();
        const nombreCell = row.insertCell(0);
        const cantidadCell = row.insertCell(1);
        const precioCell = row.insertCell(2);

        nombreCell.innerHTML = producto.nombre;
        cantidadCell.innerHTML = producto.cantidad;
        precioCell.innerHTML = producto.precio + '€';
    }
}

function toggleTabla() {
    const tabla = document.getElementById("tablaInventario");
    const botonMostrar = document.querySelector('button[onclick="mostrarInventario()"]');

    if (tablaVisible) {
        tabla.style.display = "none";
        botonMostrar.textContent = "Mostrar inventario";
    } else {
        tabla.style.display = "table";
        botonMostrar.textContent = "Ocultar inventario";
    }

    tablaVisible = !tablaVisible;
}

document.getElementById("tablaInventario").style.display = "none";

document.querySelector('button[onclick="mostrarInventario()"]').addEventListener("click", toggleTabla);
