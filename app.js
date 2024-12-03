import { pool } from "./db/conexion";
import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM posts");
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  if (!titulo || !img || !descripcion) {
    return res.status(400).send('Todos los campos son obligatorios.');  }
  try {
    await pool.query(
      'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3)',
      [titulo, img, descripcion]
    );
    res.status(201).send('Post creado exitosamente.');
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});




