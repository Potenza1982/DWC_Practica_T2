"use strict";

// Espera a que se cargue completamente el DOM antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos del DOM por su ID
  let cuerpoTabla = document.getElementById("cuerpo-tabla");
  let productoCampo = document.getElementById("producto");
  let cantidadCampo = document.getElementById("cantidad");
  let precioUnitarioCampo = document.getElementById("precio-unitario");
  let descuentoCampo = document.getElementById("descuento");
  let agregarLineaBtn = document.getElementById("agregarLinea");

  // Función que se ejecuta al hacer clic en el botón "Agregar"
  function agregarFila() {
    // Obtener valores de los campos de entrada
    let producto = productoCampo.value;
    let cantidad = cantidadCampo.value;
    let precioUnitario = precioUnitarioCampo.value;
    let descuento = descuentoCampo.value;

     // Mostrar los valores en la consola con el formato deseado
     console.log("Valores de los campos:");
     console.log("Producto:", producto);
     console.log("Cantidad:", cantidad);
     console.log("Precio Unitario:", precioUnitario);
     console.log("Descuento:", descuento);

    // Crear una nueva fila en la tabla
    let nuevaFila = cuerpoTabla.insertRow();

    // Añadir celdas a la nueva fila y asignar valores
    nuevaFila.insertCell(0).textContent = producto;
    nuevaFila.insertCell(1).textContent = cantidad;
    nuevaFila.insertCell(2).textContent = precioUnitario;
    nuevaFila.insertCell(3).textContent = descuento;

    // Crear un botón "Agregar" en la última celda de la nueva fila
    let celdaBoton = nuevaFila.insertCell(4);
    let botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar";
    botonAgregar.className = "btn btn-success";
    
    // Asociar evento de clic al botón "Agregar" en cada fila
    botonAgregar.addEventListener("click", function () {
      // Lógica a ejecutar cuando se hace clic en el botón "Agregar" de una fila
      console.log("Botón Agregar en la fila:", nuevaFila);
    });
    
    // Agregar el botón "Agregar" a la celda correspondiente
    celdaBoton.appendChild(botonAgregar);

    // Limpiar los campos después de agregar la fila
    productoCampo.value = "";
    cantidadCampo.value = "";
    precioUnitarioCampo.value = "";
    descuentoCampo.value = "";
  }

  // Agregar evento de clic al botón "Agregar" y asociar la función 'agregarFila'
  agregarLineaBtn.addEventListener("click", function (event) {
    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault();
    // Llamar a la función para agregar la fila
    agregarFila();
  });
});
