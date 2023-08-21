import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use("/api", indexRoutes);
app.use("/api", tasksRoutes);

export default app;
