import { AppBar } from "./components/AppBar";
import { Home } from "./routes/Home";
import { CreateNotepad } from "./routes/CreateNotepad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-notepad" element={<CreateNotepad />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
