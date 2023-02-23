export function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      className="bg-blue-400 hover:bg-blue-500 py-2 px-4 text-white uppercase font-bold rounded-lg text-sm"
      {...props}
    />
  );
}
