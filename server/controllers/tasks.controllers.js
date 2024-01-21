import { query } from "express";
import { pool } from "../db.js";

export const getTasks = (req, res) => {
  res.send("obteniendo tareas");
};

export const getTask = (req, res) => {
  res.send("obteniendo una tarea");
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

export const delteTask = (req, res) => {
  res.send("eliminando tareas");
};
