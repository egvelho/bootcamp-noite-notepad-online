import express from "express";
import { promises as fs } from "fs";
import type { Notepad } from "../types";
import * as notepadCrud from "../notepadCrud";

export const notepads = express.Router();

// Lista todos os notepads
notepads.get("/", async (req, res) => {
  console.log((req as any).requestDate);
  const notepads = await notepadCrud.getNotepads();
  res.status(200).json(notepads);
});

// Adiciona um novo notepad
notepads.post("/", async (req, res) => {
  const result = await notepadCrud.createNotepad(req.body);
  res.status(201).json(result);
});

// Carrega um notepad pelo id
notepads.get("/:id", async (req, res) => {
  const notepad = await notepadCrud.getNotepad(Number(req.params.id));
  res.status(200).json(notepad);
});

// Atualiza um notepad pelo id
notepads.put("/:id", (req, res) => {
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
notepads.patch("/:id", async (req, res) => {
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
notepads.delete("/:id", async (req, res) => {
  const result = await notepadCrud.deleteNotepad(Number(req.params.id));
  res.status(200).json(result);
});
