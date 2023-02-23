import type { Notepad } from "../types";

export type NotepadViewProps = Partial<Notepad>;

export function NotepadView({
  id,
  title,
  description,
  content,
}: NotepadViewProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex-[2]">
      {id && <span className="text-sm text-gray-500">#{id}</span>}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="mt-4">{content}</p>
    </div>
  );
}
