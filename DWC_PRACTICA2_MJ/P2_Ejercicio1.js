"use strict";

// Espera a que se cargue completamente el DOM antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Acceder a los elementos por su ID
    let cuerpoTabla = document.getElementById('cuerpo-tabla'); // Obtiene el elemento con el ID 'cuerpo-tabla' (tbody)
    let productoCampo = document.getElementById('producto'); // Obtiene el campo de entrada con el ID 'producto'
    let cantidadCampo = document.getElementById('cantidad'); // Obtiene el campo de entrada con el ID 'cantidad'
    let precioUnitarioCampo = document.getElementById('precio-unitario'); // Obtiene el campo de entrada con el ID 'precio-unitario'
    let descuentoCampo = document.getElementById('descuento'); // Obtiene el campo de entrada con el ID 'descuento'
    let agregarLineaBtn = document.getElementById('agregarLinea'); // Obtiene el botón con el ID 'agregarLinea'

    // Muestra información en la consola para verificar que se han accedido correctamente los elementos
    console.log("Acceso a elementos:");
    console.log("Cuerpo de la tabla:", cuerpoTabla);
    console.log("Producto:", productoCampo);
    console.log("Cantidad:", cantidadCampo);
    console.log("Precio Unitario:", precioUnitarioCampo);
    console.log("Descuento:", descuentoCampo);
    console.log("Botón Agregar:", agregarLineaBtn);

});

