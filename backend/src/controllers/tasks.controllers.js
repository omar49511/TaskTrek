import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tasks");
  res.send({ rows });
};

export const createTask = async (req, res) => {
  const { title, description, deadline, priority, completed } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO tasks (title, description, deadline, priority, completed) VALUES (?, ?, ?, ?, ?)",
    [title, description, deadline, priority, completed]
  );
  res.send({ rows });
};

export const updateTask = async (req, res) => {
  const { title, description, deadline, priority, completed } = req.body;
  const [rows] = await pool.query(
    "UPDATE tasks SET title = ?, description = ?, deadline = ?, priority = ?, completed = ? WHERE task_id = ?",
    [title, description, deadline, priority, completed, req.params.id]
  );
  console.log(rows);
  if (rows.affectedRows === 0) {
    return res.status(404).send({ message: "Task not found" });
  }
  res.send({ message: "Task updated" });
};

export const deleteTask = async (req, res) => {
  const [rows] = await pool.query("DELETE FROM tasks WHERE task_id = ?", [
    req.params.id,
  ]);
  console.log(rows);
  if (rows.affectedRows === 0) {
    return res.status(404).send({ message: "Task not found" });
  }
  res.send({ message: "Task deleted" });
};

export const getTask = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tasks WHERE task_id = ?", [
    req.params.id,
  ]);

  if (rows.length === 0) {
    return res.status(404).send({ message: "Task not found" });
  }

  res.send({ rows });
};
