import express from "express";
const app = express();

// Configuración y rutas de Express
// Obtener todas las tareas
app.get("/tasks", (req, res) => res.send("obteniendo tareas"));
// Obtener una tarea específica
app.get("/tasks/:id", (req, res) =>
  res.send("obteniendo una tarea específica")
);

// Crear una nueva tarea

app.post("/tasks", (req, res) => res.send("creando una nueva tarea"));

// Actualizar una tarea

app.put("/tasks/:id", (req, res) =>
  res.send("actualizando una tarea específica")
);

// Eliminar una tarea

app.delete("/tasks/:id", (req, res) =>
  res.send("eliminando una tarea específica")
);

// Marcar tarea como completada

app.patch("/tasks/:id/complete", (req, res) =>
  res.send("marcando una tarea como completada")
);

// Filtrar tareas por estado

app.get("/tasks/filter/:status", (req, res) =>
  res.send("filtrando tareas por estado")
);

export default app;
