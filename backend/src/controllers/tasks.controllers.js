import { pool } from "../db.js";

export const getTasks = (req, res) => {
  console.log("getTasks");
  res.send("obteniendo tareas");
};

export const createTask = async (req, res) => {
  const { title, description, deadline, priority, completed } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO tasks(title, description, deadline, priority, completed) VALUES (?, ?, ?, ?, ?)",
    [title, description, deadline, priority, completed]
  );
  res.send({ rows });
};

export const updateTask = (req, res) => {
  console.log("updateTask");
  res.send("actualizando tarea");
};

export const deleteTask = (req, res) => {
  console.log("deleteTask");
  res.send("eliminando tarea");
};

export const getTask = (req, res) => {
  console.log("getTask");
  res.send("obteniendo tarea");
};
