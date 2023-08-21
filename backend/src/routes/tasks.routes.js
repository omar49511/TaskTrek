import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

// Configuración y rutas de Express
// Obtener todas las tareas
router.get("/tasks", getTasks);

// Obtener una tarea específica
router.get("/tasks/:id", getTask);

// Crear una nueva tarea

router.post("/tasks", createTask);

// Actualizar una tarea

router.put("/tasks/:id", updateTask);

// Eliminar una tarea

router.delete("/tasks/:id", deleteTask);

// Marcar tarea como completada

router.patch("/tasks/:id/complete", (req, res) =>
  res.send("marcando una tarea como completada")
);

// Filtrar tareas por estado

router.get("/tasks/filter/:status", (req, res) =>
  res.send("filtrando tareas por estado")
);
export default router;
