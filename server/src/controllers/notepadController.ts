import express from "express";
import * as notepadCrud from "../notepadCrud";
import * as notepadRepository from "../repositories/notepadRepository";

export const notepadController = express.Router();

// Lista todos os notepads
notepadController.get("/", async (req, res) => {
  const notepads = await notepadRepository.findMany();
  //console.log(databaseNotepads);
  //const notepads = await notepadCrud.getNotepads();
  res.status(200).json(notepads);
});

// Adiciona um novo notepad
notepadController.post("/", async (req, res) => {
  const result = await notepadCrud.createNotepad(req.body);
  res.status(201).json(result);
});

// Carrega um notepad pelo id
notepadController.get("/:id", async (req, res) => {
  const notepad = await notepadCrud.getNotepad(Number(req.params.id));
  res.status(200).json(notepad);
});

// Atualiza um notepad pelo id
notepadController.put("/:id", (req, res) => {
  req.body.createdAt = new Date(req.body.createdAt);
  res.status(200).json({
    success: true,
    data: {
      id: Number(req.params.id),
      ...req.body,
    },
  });
});

// Atualização parcial de um notepad pelo id
notepadController.patch("/:id", async (req, res) => {
  const { success, notepad } = await notepadCrud.updateNotepad(
    Number(req.params.id),
    req.body
  );

  res.status(200).json({
    success,
    data: notepad,
  });
});

// Deleta um notepad pelo id
notepadController.delete("/:id", async (req, res) => {
  const result = await notepadCrud.deleteNotepad(Number(req.params.id));
  res.status(200).json(result);
});
