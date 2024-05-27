// Función para solicitar información del producto y calcular su costo total
function solicitarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt(`Ingrese el precio de ${nombre}:`));
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombre}:`));
    
    let totalProducto = precio * cantidad;
    
    console.log(`Producto: ${nombre}, Precio: ${precio}, Cantidad: ${cantidad}, Total: ${totalProducto}`);
    
    return totalProducto;
}

// Función principal que calcula el costo total de los productos ingresados
function calcularCostoTotal() {
    let totalProductos = parseInt(prompt("¿Cuántos productos diferentes desea ingresar?"));
    
    let sumaTotal = 0;

    for (let i = 0; i < totalProductos; i++) {
        let costoProducto = solicitarProducto();
        sumaTotal += costoProducto;
    }

    console.log(`El costo total es: $${sumaTotal}`);

    if (sumaTotal > 100) {
        console.log("¡Has gastado más de $100!");
    } else {
        console.log("No has gastado más de $100.");
    }
}

// Ejecutar el simulador
calcularCostoTotal();
