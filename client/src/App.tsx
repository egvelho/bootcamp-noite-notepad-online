import { AppBar } from "./components/AppBar";
import { Home } from "./routes/Home";
import { CreateNotepad } from "./routes/CreateNotepad";
import { EditNotepad } from "./routes/EditNotepad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-notepad" element={<CreateNotepad />} />
          <Route path="/editar-notepad/:id" element={<EditNotepad />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
