import { pool } from "../db.js";

export const getPing = async (req, res) => {
  const [result] = await pool.query("SELECT 'pong' AS solution");
  res.json(result[0]);
};
