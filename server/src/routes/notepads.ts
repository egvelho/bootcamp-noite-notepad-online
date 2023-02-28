import express from "express";
import { promises as fs } from "fs";
import type { Notepad } from "../types";
import * as notepadCrud from "../notepadCrud";

export const notepads = express.Router();

const exampleNotepad: Notepad = {
  title: "Um título qualquer",
  description: "Exemplo de descrição",
  createdAt: new Date(),
  content: `
    Ainda assim, existem dúvidas a respeito de
    como a competitividade nas transações
    comerciais desafia a capacidade de
    equalização do fluxo de informações.
  `,
};

// Lista todos os notepads
notepads.get("/", async (req, res) => {
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
notepads.patch("/:id", (req, res) => {
  req.body.createdAt &&= new Date(req.body.createdAt);
  res.status(200).json({
    success: true,
    data: {
      id: Number(req.params.id),
      ...exampleNotepad,
      ...req.body,
    },
  });
});

// Deleta um notepad pelo id
notepads.delete("/:id", async (req, res) => {
  const result = await notepadCrud.deleteNotepad(Number(req.params.id));
  res.status(200).json(result);
});
