import { useState } from "react";
import { AppBar } from "./components/AppBar";
import { useAxios } from "./useAxios";
import { NotepadList } from "./components/NotepadList";
import type { Notepad } from "./types";
import { NotepadView } from "./components/NotepadView";

function App() {
  const [{ data: notepadList }] = useAxios<Notepad[]>({
    url: "/notepads",
    method: "get",
  });

  const [{ data: currentNotepad = {} }, getNotepad] = useAxios<Notepad>(
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
        <section className="flex flex-col md:flex-row gap-4 m-4 md:max-h-[calc(100vh-64px-32px)] md:max-w-screen-lg lg:mx-auto">
          <NotepadView {...currentNotepad} />
          {notepadList && (
            <NotepadList
              notepadList={notepadList}
              getNotepad={(id) => {
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
