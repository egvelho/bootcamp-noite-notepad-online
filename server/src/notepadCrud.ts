import type { Notepad } from "./types";
import { promises as fs } from "fs";

export async function createNotepad(notepad: Partial<Notepad>) {
  const { id: latestId } = await JSON.parse(
    (await fs.readFile("../latest-id.json")).toString()
  );
  notepad.id = latestId + 1;
  await fs.writeFile(
    "../latest-id.json",
    JSON.stringify({
      id: notepad.id,
    })
  );
  notepad.createdAt = new Date();
  await fs.writeFile(
    `../notepads/${notepad.id}.json`,
    JSON.stringify(notepad, undefined, 2)
  );

  return { success: true, notepad };
}

export async function deleteNotepad(id: number) {
  let success = false;
  let notepad = null;

  try {
    const notepadBuffer = await fs.readFile(`../notepads/${id}.json`);
    notepad = JSON.parse(notepadBuffer.toString());
    await fs.unlink(`../notepads/${id}.json`);
    success = true;
    if (!success) {
      notepad = null;
    }
  } catch (error) {
    console.log(error);
    success = false;
  }

  return {
    success,
    notepad,
  };
}

export async function getNotepad(id: number) {
  const notepadBuffer = await fs.readFile(`../notepads/${id}.json`);
  const notepad = JSON.parse(notepadBuffer.toString());
  return notepad;
}

export async function getNotepads() {
  const notepadsPaths = (await fs.readdir("../notepads")).map(
    (path) => `../notepads/${path}`
  );

  const notepadsPromises = notepadsPaths.map((path) => fs.readFile(path));
  const notepadsBuffers = await Promise.all(notepadsPromises);
  const notepads = notepadsBuffers
    .map((notepad) => JSON.parse(notepad.toString()))
    .map(({ content, ...notepad }) => notepad);

  return notepads;
}
