var $iMDgT$11labsclient = require("@11labs/client");

// index.js

// Obtener elementos del DOM
const $4c451367af8382fd$var$botonIniciar = document.getElementById("iniciar");
const $4c451367af8382fd$var$botonTerminar = document.getElementById("terminar");
const $4c451367af8382fd$var$mensajesDiv = document.getElementById("mensajes");
let $4c451367af8382fd$var$conversation;
// Función para agregar mensajes al contenedor
function $4c451367af8382fd$var$agregarMensaje(mensaje, tipo = "default") {
    console.log(`Agregando mensaje: "${mensaje}" con tipo "${tipo}"`);
    const p = document.createElement("p");
    p.textContent = mensaje;
    // Asignar la clase basada en el tipo de mensaje
    switch(tipo){
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
    $4c451367af8382fd$var$mensajesDiv.appendChild(p);
    $4c451367af8382fd$var$mensajesDiv.scrollTop = $4c451367af8382fd$var$mensajesDiv.scrollHeight; // Auto scroll
}
// Función para manejar mensajes tentativos
function $4c451367af8382fd$var$manejarMensajeTentativo(message) {
    console.log("Manejando mensaje tentativo:", message.text);
    // Buscar si ya existe un mensaje tentativo para actualizarlo
    let tentativo = $4c451367af8382fd$var$mensajesDiv.querySelector(".tentativo");
    if (!tentativo) {
        tentativo = document.createElement("p");
        tentativo.classList.add("tentativo");
        tentativo.textContent = message.text;
        $4c451367af8382fd$var$mensajesDiv.appendChild(tentativo);
        console.log("Mensaje tentativo creado:", tentativo.textContent);
    } else {
        tentativo.textContent = message.text;
        console.log("Mensaje tentativo actualizado:", tentativo.textContent);
    }
    $4c451367af8382fd$var$mensajesDiv.scrollTop = $4c451367af8382fd$var$mensajesDiv.scrollHeight; // Auto scroll
}
// Manejar el clic en el botón de iniciar conversación
$4c451367af8382fd$var$botonIniciar.addEventListener("click", async ()=>{
    try {
        // Solicitar permiso para usar el micrófono
        await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        console.log("Permiso de micr\xf3fono otorgado.");
        $4c451367af8382fd$var$botonIniciar.disabled = true;
        $4c451367af8382fd$var$botonTerminar.disabled = false;
        // Iniciar la conversación
        $4c451367af8382fd$var$conversation = await (0, $iMDgT$11labsclient.Conversation).startSession({
            agentId: "Kl90eWakGKseixCPuLaJ",
            onConnect: ()=>{
                console.log("Conectado al agente.");
                $4c451367af8382fd$var$agregarMensaje("Conectado al agente.", "system");
            },
            onDisconnect: ()=>{
                console.log("Desconectado del agente.");
                $4c451367af8382fd$var$agregarMensaje("Desconectado del agente.", "system");
            },
            onMessage: (message)=>{
                console.log("Mensaje recibido:", message);
                if (message.isFinal) {
                    // Eliminar mensaje tentativo si existe
                    const tentativo = $4c451367af8382fd$var$mensajesDiv.querySelector(".tentativo");
                    if (tentativo) {
                        tentativo.remove();
                        console.log("Mensaje tentativo eliminado.");
                    }
                    if (message.isUser) {
                        $4c451367af8382fd$var$agregarMensaje(`T\xfa: ${message.text}`, "user");
                        console.log("Mensaje de usuario agregado:", message.text);
                    } else {
                        $4c451367af8382fd$var$agregarMensaje(`Agente: ${message.text}`, "agent");
                        console.log("Mensaje del agente agregado:", message.text);
                    }
                } else // Manejar mensajes tentativos
                $4c451367af8382fd$var$manejarMensajeTentativo(message);
            },
            onError: (error)=>{
                console.error("Error en la conversaci\xf3n:", error);
                $4c451367af8382fd$var$agregarMensaje(`Error: ${error.message || error}`, "error");
            },
            onStatusChange: (status)=>{
                console.log("Status Change:", status);
                // Acceder a propiedades específicas del objeto status
                const connected = status.connected ? "Conectado" : "Desconectado";
                const details = status.details ? status.details : "Sin detalles";
                $4c451367af8382fd$var$agregarMensaje(`Estado de conexi\xf3n: ${connected} - ${details}`, "system");
            },
            onModeChange: (mode)=>{
                console.log("Mode Change:", mode);
                // Acceder a propiedades específicas del objeto mode
                const currentMode = mode.currentMode ? mode.currentMode : "Desconocido";
                $4c451367af8382fd$var$agregarMensaje(`Modo del agente: ${currentMode}`, "system");
            }
        });
    } catch (error) {
        console.error("Error al iniciar la conversaci\xf3n:", error);
        $4c451367af8382fd$var$agregarMensaje(`No se pudo iniciar la conversaci\xf3n: ${error.message || error}`, "error");
    }
});
// Manejar el clic en el botón de terminar conversación
$4c451367af8382fd$var$botonTerminar.addEventListener("click", async ()=>{
    if ($4c451367af8382fd$var$conversation) try {
        await $4c451367af8382fd$var$conversation.endSession();
        $4c451367af8382fd$var$agregarMensaje("Sesi\xf3n finalizada.", "system");
        console.log("Sesi\xf3n finalizada.");
    } catch (error) {
        console.error("Error al terminar la sesi\xf3n:", error);
        $4c451367af8382fd$var$agregarMensaje(`Error al terminar la sesi\xf3n: ${error.message || error}`, "error");
    } finally{
        $4c451367af8382fd$var$botonIniciar.disabled = false;
        $4c451367af8382fd$var$botonTerminar.disabled = true;
    }
});


//# sourceMappingURL=index.js.map
