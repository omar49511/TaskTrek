import app from "./app.js";

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await app.listen(port);
    console.log(`Servidor Express en ejecución en el puerto ${port}`);
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};

startServer();
