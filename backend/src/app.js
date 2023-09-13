import express from "express";
import cors from "cors";
import tasksRoutes from "./routes/tasks.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cookieSession from "cookie-session";
import passport from "passport";
import "./passport.js";
// import routinesRoutes from "./routes/routines.routes.js";

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Configurar CORS para permitir solicitudes desde http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", indexRoutes);
app.use("/api", tasksRoutes);
// app.use("/api", routinesRoutes);

export default app;
