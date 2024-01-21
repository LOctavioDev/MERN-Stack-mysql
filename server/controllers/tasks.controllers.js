import { json, query } from "express";
import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM tbb_task ORDER BY createAt ASC"
  );

  res.json(result);
};

export const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tbb_task WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0)
    return res.status(404).json({ message: "Task not found" });

  res.json(result[0]);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tbb_task(title, description) VALUES (?, ?)",
    [title, description]
  );

  res.json({
    id: result.insertId,
    title,
    description,
  });
};

export const updateTask = (req, res) => {
  res.send("actualizando tarea");
};

export const delteTask = async (req, res) => {
  const [result] = await pool.query("DELETE FROM tbb_task WHERE id = ?", [
    req.params.id,
  ]);

  if(result.affectedRows === 0){
    return res.status(404).json({message: "Task not found"})
  }

  return res.sendStatus(204)
};
