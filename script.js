// Declarar variables 
let secreto = Math.floor(Math.random() * 100) + 1;
let intentosRestantes = 5;

// Referencias a los elementos del DOM
const input = document.getElementById("intento");
const boton = document.getElementById("verificar");
const textoIntentos = document.getElementById("intentos");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");

// Escucha el clic en el botón "Verificar"
boton.addEventListener("click", () => {

  const intentoUsuario = parseInt(input.value); 

  if (
    isNaN(intentoUsuario) ||
    intentoUsuario < 1 ||
    intentoUsuario > 100
  ) {
    mensaje.textContent = "⚠️ Por favor escribe un número válido entre 1 y 100.";
    return;
  }

  if (intentosRestantes > 0) {

    if (intentoUsuario === secreto) {
      mensaje.textContent = "🎉 ¡Correcto! Has adivinado el número secreto.";
      finalizarJuego();
    } else if (intentoUsuario < secreto) {
      mensaje.textContent = "🔼 El número secreto es mayor.";
    } else {
      mensaje.textContent = "🔽 El número secreto es menor.";
    }

    intentosRestantes--;
    textoIntentos.textContent = "Intentos restantes: " + intentosRestantes;

    input.value = "";

    if (intentosRestantes === 0 && intentoUsuario !== secreto) {
      mensaje.textContent = `💀 Te quedaste sin intentos. El número era ${secreto}.`;
      finalizarJuego();
    }
  }
});

// Finaliza el juego
function finalizarJuego() {

  input.disabled = true;
  boton.disabled = true;

  botonReiniciar.style.display = "inline-block";
}

// Reinicia el juego
botonReiniciar.addEventListener("click", () => {
  secreto = Math.floor(Math.random() * 100) + 1;

  intentosRestantes = 5;
  textoIntentos.textContent = "Intentos restantes: " + intentosRestantes;

  input.value = "";
  mensaje.textContent = "";

  input.disabled = false;
  boton.disabled = false;

  botonReiniciar.style.display = "none";
});
