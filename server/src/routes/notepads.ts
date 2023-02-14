import express from "express";

export const notepads = express.Router();

type Notepad = {
  id?: number;
  title: string;
  description: string;
  content: string;
  createdAt: Date;
};

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

const exampleNotepadsList: Notepad[] = new Array(10).fill(exampleNotepad);

const exampleNotepadsLookupTable = exampleNotepadsList.reduce(
  (stack, item, index) => {
    stack[index.toString()] = { id: index, ...item };
    return stack;
  },
  {} as { [key: string]: Notepad }
);

// Lista todos os notepads
notepads.get("/", (req, res) => {
  res.status(200).json(Object.values(exampleNotepadsLookupTable));
});

// Adiciona um novo notepad
notepads.post("/", (req, res) => {
  req.body.createdAt = new Date(req.body.createdAt);
  res.status(201).json({
    success: true,
    data: {
      id: 1,
      ...req.body,
    },
  });
});

// Carrega um notepad pelo id
notepads.get("/:id", (req, res) => {
  res.status(200).json(exampleNotepadsLookupTable[req.params.id]);
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
notepads.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      id: Number(req.params.id),
      ...exampleNotepad,
    },
  });
});
