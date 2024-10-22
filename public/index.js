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

// Manejar el clic en el botón de iniciar conversación
botonIniciar.addEventListener("click", async () => {
  try {
    // Solicitar permiso para usar el micrófono
    await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log("Permiso de micrófono otorgado.");

    botonIniciar.disabled = true;
    botonTerminar.disabled = false;

    // Iniciar la conversación
    conversation = await Conversation.startSession({
      agentId: "Kl90eWakGKseixCPuLaJ", // Reemplaza con tu propio agentId
      onConnect: () => {
        console.log("Conectado al agente.");
        agregarMensaje("Conectado al agente.", "system");
      },
      onDisconnect: () => {
        console.log("Desconectado del agente.");
        agregarMensaje("Desconectado del agente.", "system");
      },
      onMessage: (message) => {
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
        agregarMensaje(`Estado de conexión: ${connected} - ${details}`, "system");
      },
      onModeChange: (mode) => {
        console.log("Mode Change:", mode);
        // Acceder a propiedades específicas del objeto mode
        const currentMode = mode.currentMode ? mode.currentMode : "Desconocido";
        agregarMensaje(`Modo del agente: ${currentMode}`, "system");
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


