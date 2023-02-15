export function AppBar() {
  return (
    <header className="p-3 flex flex-row bg-white justify-between shadow-md">
      <div className="flex flex-row align-self gap-6">
        <a href="/" className="flex flex-row align-self items-center gap-2">
          <img src="/logo.png" alt="" className="w-10" />
          <span className="uppercase font-bold">Pastebin</span>
        </a>
        <nav className="align-self">
          <a href="/" className="text-blue-500 hover:underline font-semibold">
            Página inicial
          </a>
        </nav>
      </div>
      <div className="flex flex-row">
        <button
          onClick={() => {}}
          className="bg-blue-400 hover:bg-blue-500 py-1 px-3 text-white uppercase font-bold rounded-lg text-sm"
        >
          Criar notepad
        </button>
      </div>
    </header>
  );
}
