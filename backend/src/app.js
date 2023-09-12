import express from "express";
import cors from "cors";
import tasksRoutes from "./routes/tasks.routes.js";
import indexRoutes from "./routes/index.routes.js";
// import routinesRoutes from "./routes/routines.routes.js";

const app = express();

// Configurar CORS para permitir solicitudes desde http://localhost:5173
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api", indexRoutes);
app.use("/api", tasksRoutes);
// app.use("/api", routinesRoutes);

export default app;
