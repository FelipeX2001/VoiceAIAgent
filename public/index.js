// index.js

import { Conversation } from "@11labs/client";

// Obtener elementos del DOM
const botonIniciar = document.getElementById("iniciar");
const botonTerminar = document.getElementById("terminar");
const mensajesDiv = document.getElementById("mensajes");

let conversation;

// Función para agregar mensajes al contenedor
function agregarMensaje(mensaje, tipo = "default") {
  console.log(`Agregando mensaje: "${mensaje}" con tipo "${tipo}"`);
  const p = document.createElement("p");
  p.textContent = mensaje;

  // Asignar la clase basada en el tipo de mensaje
  switch (tipo) {
    case "user":
      p.classList.add("user");
      break;
    case "agent":
      p.classList.add("agent");
      break;
    case "system":
      p.classList.add("system");
      break;
    case "error":
      p.classList.add("error");
      break;
    case "tentativo":
      p.classList.add("tentativo");
      break;
    default:
      p.classList.add("default");
      break;
  }

  mensajesDiv.appendChild(p);
  mensajesDiv.scrollTop = mensajesDiv.scrollHeight; // Auto scroll
}

// Función para manejar mensajes tentativos
function manejarMensajeTentativo(message) {
  console.log("Manejando mensaje tentativo:", message.text);
  // Buscar si ya existe un mensaje tentativo para actualizarlo
  let tentativo = mensajesDiv.querySelector(".tentativo");

  if (!tentativo) {
    tentativo = document.createElement("p");
    tentativo.classList.add("tentativo");
    tentativo.textContent = message.text;
    mensajesDiv.appendChild(tentativo);
    console.log("Mensaje tentativo creado:", tentativo.textContent);
  } else {
    tentativo.textContent = message.text;
    console.log("Mensaje tentativo actualizado:", tentativo.textContent);
  }

  mensajesDiv.scrollTop = mensajesDiv.scrollHeight; // Auto scroll
}

// Función para manejar la clasificación de mensajes finales
async function manejarMensajeFinal(message) {
  try {
    // Obtener el volumen de entrada
    const inputVolume = await conversation.getInputVolume();
    console.log(`Volumen de Entrada: ${inputVolume}`);

    const THRESHOLD = 0.3; // Ajusta este valor según sea necesario

    if (inputVolume < THRESHOLD) {
      console.log("Volumen de entrada demasiado bajo, mensaje ignorado.");
      // Opcional: Puedes agregar lógica adicional aquí si lo deseas
      return;
    }

    if (message.isUser === true) {
      agregarMensaje(`Tú: ${message.text}`, "user");
      console.log("Mensaje de usuario agregado:", message.text);
    } else if (message.isUser === false) {
      agregarMensaje(`Agente: ${message.text}`, "agent");
      console.log("Mensaje del agente agregado:", message.text);
    } else {
      // Si 'isUser' no está definido, asumir mensaje del agente
      agregarMensaje(`Agente: ${message.text}`, "agent");
      console.log("Mensaje del agente agregado (asumiendo 'isUser' no definido):", message.text);
    }

    // Eliminar mensajes tentativos y 'default' si existen
    eliminarMensajes(["tentativo", "default"]);
  } catch (error) {
    console.error("Error al manejar el mensaje final:", error);
    agregarMensaje(`Error al procesar el mensaje: ${error.message || error}`, "error");
  }
}

// Función para eliminar mensajes por clase
function eliminarMensajes(clases) {
  clases.forEach(clase => {
    const elementos = mensajesDiv.querySelectorAll(`.${clase}`);
    elementos.forEach(elem => {
      elem.remove();
      console.log(`Mensaje con clase "${clase}" eliminado.`);
    });
  });
}

// Manejar el clic en el botón de iniciar conversación
botonIniciar.addEventListener("click", async () => {
  try {
    // Solicitar permiso para usar el micrófono con restricciones de audio para reducir la sensibilidad
    await navigator.mediaDevices.getUserMedia({
      audio: {
        noiseSuppression: true,       // Supresión de ruido
        echoCancellation: true,       // Cancelación de eco
        autoGainControl: false         // Desactivar control automático de ganancia
      }
    });
    console.log("Permiso de micrófono otorgado.");

    botonIniciar.disabled = true;
    botonTerminar.disabled = false;

    // Iniciar la conversación
    conversation = await Conversation.startSession({
      agentId: "rhAH8UxD3uR19kPtEdmq", // Reemplaza con tu propio agentId
      onConnect: async () => {
        console.log("Conectado al agente.");
        // Configurar el volumen de salida a -30 dB
        await conversation.setVolume({ volume: 1 }); // 1 es -30 dB
        console.log("Volumen de salida establecido a -30 dB.");
        //agregarMensaje("Conectado al agente.", "system");
      },
      onDisconnect: () => {
        console.log("Desconectado del agente.");
        //agregarMensaje("Desconectado del agente.", "system");
      },
      onMessage: (message) => {
        console.log(message)
        agregarMensaje(message.message)
        console.log("Mensaje recibido:", message);
        if (message.isFinal) {
          // Eliminar mensaje tentativo si existe
          const tentativo = mensajesDiv.querySelector(".tentativo");
          if (tentativo) {
            tentativo.remove();
            console.log("Mensaje tentativo eliminado.");
          }

          if (message.isUser) {
            agregarMensaje(`Tú: ${message.text}`, "user");
            console.log("Mensaje de usuario agregado:", message.text);
          } else {
            agregarMensaje(`Agente: ${message.text}`, "agent");
            console.log("Mensaje del agente agregado:", message.text);
          }
        } else {
          // Manejar mensajes tentativos
          manejarMensajeTentativo(message);
        }
      },
      onError: (error) => {
        console.error("Error en la conversación:", error);
        agregarMensaje(`Error: ${error.message || error}`, "error");
      },
      onStatusChange: (status) => {
        console.log("Status Change:", status);
        // Acceder a propiedades específicas del objeto status
        const connected = status.connected ? "Conectado" : "Desconectado";
        const details = status.details ? status.details : "Sin detalles";
        //agregarMensaje(`Estado de conexión: ${connected} - ${details}`, "system");
      },
      onModeChange: (mode) => {
        console.log("Mode Change:", mode);
        // Acceder a propiedades específicas del objeto mode
        const currentMode = mode.currentMode ? mode.currentMode : "Desconocido";
        //agregarMensaje(`Modo del agente: ${currentMode}`, "system");
      },
    });
  } catch (error) {
    console.error("Error al iniciar la conversación:", error);
    agregarMensaje(`No se pudo iniciar la conversación: ${error.message || error}`, "error");
  }
});

// Manejar el clic en el botón de terminar conversación
botonTerminar.addEventListener("click", async () => {
  if (conversation) {
    try {
      await conversation.endSession();
      agregarMensaje("Sesión finalizada.", "system");
      console.log("Sesión finalizada.");
    } catch (error) {
      console.error("Error al terminar la sesión:", error);
      agregarMensaje(`Error al terminar la sesión: ${error.message || error}`, "error");
    } finally {
      botonIniciar.disabled = false;
      botonTerminar.disabled = true;
    }
  }
});


