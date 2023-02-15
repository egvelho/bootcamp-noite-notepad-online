import { useState } from "react";
import { AppBar } from "./components/AppBar";
import { useAxios } from "./useAxios";
import { NotepadList } from "./components/NotepadList";
import type { Notepad } from "./types";

function App() {
  const [{ data: notepadList }] = useAxios<Notepad[]>({
    url: "/notepads",
    method: "get",
  });

  const [{ data: currentNotepad }, getNotepad] = useAxios<Notepad>(
    {
      method: "get",
    },
    {
      manual: true,
    }
  );

  return (
    <>
      <AppBar />
      <main>
        <section className="flex flex-row gap-4 m-4">
          <div className="bg-white rounded-lg shadow-lg p-4 flex-[2]">
            <span>#{currentNotepad?.id}</span>
            <h2>{currentNotepad?.title}</h2>
            <p>{currentNotepad?.description}</p>
            <p>{currentNotepad?.content}</p>
          </div>
          {notepadList && (
            <NotepadList
              notepadList={notepadList}
              getNotepad={async (id) => {
                getNotepad({
                  url: `/notepads/${id}`,
                });
              }}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
