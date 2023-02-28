import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { delay } from "../delay";
import { useAxios } from "../useAxios";
import { Button } from "../components/Button";

const texts = {
  title: "Criar notepad",
  titleFieldPlaceholder: "Título",
  descriptionFieldPlaceholder: "Descrição",
  contentFieldPlaceholder: "Conteúdo",
  submitButton: "Criar agora",
  submitSuccess: "Seu notepad foi criado com sucesso!",
  submitFailure: "Houve um erro ao criar o seu notepad :(",
};

const initialCreateNotepadState = {
  title: "",
  description: "",
  content: "",
};

export function CreateNotepad() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialCreateNotepadState);
  const [disabled, setDisabled] = useState(false);
  const [, createNotepad] = useAxios(
    {
      url: "/notepads",
      method: "post",
      data: form,
    },
    {
      manual: true,
    }
  );

  return (
    <section className="flex flex-col gap-4 m-4 md:max-w-screen-lg lg:mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2">
        <h2 className="text-2xl text-center font-bold">{texts.title}</h2>
        <input
          type="text"
          disabled={disabled}
          className="border border-gray-300 rounded-lg py-1 px-2 w-full"
          placeholder={texts.titleFieldPlaceholder}
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
        />
        <input
          type="text"
          disabled={disabled}
          className="border border-gray-300 rounded-lg py-1 px-2 w-full"
          placeholder={texts.descriptionFieldPlaceholder}
          value={form.description}
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
        />
        <textarea
          rows={5}
          disabled={disabled}
          className="border border-gray-300 rounded-lg py-1 px-2 w-full resize-none"
          placeholder={texts.contentFieldPlaceholder}
          value={form.content}
          onChange={(event) =>
            setForm({ ...form, content: event.target.value })
          }
        />
        <Button
          disabled={disabled}
          onClick={async () => {
            await createNotepad();
            setDisabled(true);
            setForm(initialCreateNotepadState);
            toast(texts.submitSuccess);
            await delay(2);
            navigate("/");
          }}
        >
          {texts.submitButton}
        </Button>
      </div>
    </section>
  );
}
