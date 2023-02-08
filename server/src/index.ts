import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    nome: "Eduardo",
  });
});

app.get("/alunos", (req, res) => {
  res.json(["Gustavo", "Felipe", "Camila", "Tiago", "Julia"]);
});

const port = 8080;
const host = "localhost";

app.listen(port, host, () => {
  console.log(`Servidor express iniciado em http://${host}:${port}`);
});
