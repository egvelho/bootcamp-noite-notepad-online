import type { Notepad } from "../types";
import { Link } from "./Link";

const texts = {
  deleteButton: "Deletar",
  editLink: "Editar",
};

export type NotepadViewProps = Partial<Notepad> & {
  onDelete?: () => void | Promise<void>;
};

export function NotepadView({
  id,
  title,
  description,
  content,
  onDelete,
}: NotepadViewProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex-[2]">
      {id !== undefined && (
        <>
          <button
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-1 px-2 rounded-md mr-4"
            onClick={onDelete}
          >
            {texts.deleteButton}
          </button>
          <Link to={`/editar-notepad/${id}`}>{texts.editLink}</Link>
        </>
      )}
      <div>
        {id !== undefined && (
          <span className="text-sm text-gray-500">#{id}</span>
        )}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="mt-4">{content}</p>
    </div>
  );
}
