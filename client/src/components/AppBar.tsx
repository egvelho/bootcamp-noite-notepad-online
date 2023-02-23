import { Button } from "./Button";
import { Link } from "./Link";

export function AppBar() {
  return (
    <header className="p-3 h-[64px] flex flex-row bg-white justify-between items-center shadow-md">
      <div className="flex flex-row items-center gap-6">
        <a href="/" className="flex flex-row items-center gap-2">
          <img src="/logo.png" alt="" className="w-10" />
          <span className="uppercase font-bold">Pastebin</span>
        </a>
        <nav className="hidden md:block">
          <Link href="/">Página inicial</Link>
        </nav>
      </div>
      <div className="flex flex-row items-center">
        <Button>Criar notepad</Button>
      </div>
    </header>
  );
}
