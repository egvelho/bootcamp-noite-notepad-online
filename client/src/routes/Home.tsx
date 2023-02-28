import toast from "react-simple-toasts";
import { useAxios } from "../useAxios";
import { NotepadList } from "../components/NotepadList";
import type { Notepad } from "../types";
import { NotepadView } from "../components/NotepadView";

const texts = {
  deleteNotepadSuccess: "Seu notepad foi deletado foi sucesso!",
  deleteNotepadFailure: "Houve um erro ao deletar seu notepad :(",
};

export function Home() {
  const [{ data: notepadList }] = useAxios<Notepad[]>({
    url: "/notepads",
    method: "get",
  });

  const [{ data: currentNotepad = {} as Partial<Notepad> }, getNotepad] =
    useAxios<Notepad>(
      {
        method: "get",
      },
      {
        manual: true,
      }
    );

  const [, deleteNotepad] = useAxios(
    {
      method: "delete",
    },
    {
      manual: true,
    }
  );

  return (
    <section className="flex flex-col md:flex-row gap-4 m-4 md:max-h-[calc(100vh-64px-32px)] md:max-w-screen-lg lg:mx-auto">
      <NotepadView
        {...currentNotepad}
        onDelete={async () => {
          await deleteNotepad({
            url: `/notepads/${currentNotepad?.id}`,
          });
          toast(texts.deleteNotepadSuccess);
        }}
      />
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
  );
}
