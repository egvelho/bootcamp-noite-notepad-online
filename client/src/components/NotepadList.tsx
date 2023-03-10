import type { Notepad } from "../types";

export type NotepadListProps = {
  notepadList: Notepad[];
  getNotepad: (id: number) => Promise<void> | void;
};

export function NotepadList({ notepadList, getNotepad }: NotepadListProps) {
  return (
    <ul className="bg-white rounded-lg shadow-lg flex-[1] overflow-y-auto md:max-w-sm">
      {notepadList?.map(({ id, title, description, createdAt }) => (
        <li
          key={id}
          className="border-b p-4 cursor-pointer hover:bg-slate-400"
          onClick={() => {
            getNotepad(id);
          }}
        >
          <time dateTime={createdAt} className="text-sm text-gray-500">
            {new Date(createdAt).toLocaleDateString()}
          </time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
