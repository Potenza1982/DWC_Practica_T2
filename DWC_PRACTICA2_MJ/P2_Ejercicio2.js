"use strict";

// Espera a que se cargue completamente el DOM antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Acceder a los elementos por su ID
  let cuerpoTabla = document.getElementById("cuerpo-tabla"); // Obtiene el elemento con el ID 'cuerpo-tabla' (tbody)
  let productoCampo = document.getElementById("producto"); // Obtiene el campo de entrada con el ID 'producto'
  let cantidadCampo = document.getElementById("cantidad"); // Obtiene el campo de entrada con el ID 'cantidad'
  let precioUnitarioCampo = document.getElementById("precio-unitario"); // Obtiene el campo de entrada con el ID 'precio-unitario'
  let descuentoCampo = document.getElementById("descuento"); // Obtiene el campo de entrada con el ID 'descuento'
  let agregarLineaBtn = document.getElementById("agregarLinea"); // Obtiene el botón con el ID 'agregarLinea'

  // Función que se ejecuta al hacer clic en el botón "Agregar"
  function agregarFila() {
    // Obtener valores de los campos
    let producto = productoCampo.value; // Obtiene el valor del campo 'producto'
    let cantidad = cantidadCampo.value; // Obtiene el valor del campo 'cantidad'
    let precioUnitario = precioUnitarioCampo.value; // Obtiene el valor del campo 'precio-unitario'
    let descuento = descuentoCampo.value; // Obtiene el valor del campo 'descuento'

    // Mostrar los valores en la consola
    console.log("Valores ingresados:");
    console.log("Producto:", producto);
    console.log("Cantidad:", cantidad);
    console.log("Precio Unitario:", precioUnitario);
    console.log("Descuento:", descuento);
  }

  // Agregar evento de clic al botón "Agregar" y asociar la función 'agregarFila'
  agregarLineaBtn.addEventListener("click", agregarFila);
});

/* ESTE CODIGO ES PARA ASEGURARTE DE QUE SE HA HECHO CLICK EN EL BOTON

  agregarLineaBtn.addEventListener('click', function () {
  console.log("Botón 'Agregar' clicado");
  agregarFila();
  });
  */

/* ESTE CODIGO ES PARA QUE SE VEA EN LA CONSOLA DEL NAVEGADOR DE CHROME

  agregarLineaBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Evita la acción por defecto del botón
    agregarFila(); // Llama a la función para agregar la fila
  });
  */
