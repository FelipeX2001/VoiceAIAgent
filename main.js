const { Conversation } = require("@11labs/client");

async function iniciarConversacion() {
  try {
    // Solicitar permiso para usar el micrófono (opcional en este contexto)
    // Aquí no es necesario ya que no estamos en un entorno de navegador.

    // Iniciar la conversación con el Agent ID
    const conversation = await Conversation.startSession({
      agentId: "rhAH8UxD3uR19kPtEdmq",
      onConnect: () => {
        console.log("Conectado al agente.");
      },
      onDisconnect: () => {
        console.log("Desconectado del agente.");
      },
      onMessage: (message) => {
        console.log("Mensaje recibido:", message);
      },
      onError: (error) => {
        console.error("Error:", error);
      },
      onStatusChange: (status) => {
        console.log("Estado de conexión:", status);
      },
      onModeChange: (mode) => {
        console.log("Modo de conversación:", mode);
      },
    });

    // Mantener la conversación activa por un tiempo
    setTimeout(async () => {
      await conversation.endSession();
      console.log("Sesión finalizada.");
    }, 10000); // 10 segundos
  } catch (error) {
    console.error("No se pudo iniciar la conversación:", error);
  }
}

iniciarConversacion();
