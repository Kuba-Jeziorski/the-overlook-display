import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../src/index.css";

import { MainProvider } from "./contexts/MainContext.jsx";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import Book from "./pages/Book.jsx";
import Villains from "./pages/Villains";
import Villain from "./pages/Villain.jsx";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Navigation />
        <div className="home-bg">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/villains" element={<Villains />} />
            <Route path="/villains/:id" element={<Villain />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </div>
        <Footer>
          Design & code
          <Link
            to="https://github.com/Kuba-Jeziorski"
            target="_blank"
            rel="noopener noreferrer"
            title="Kuba_Jeziorski Github page"
          >
            Kuba-Jeziorski
          </Link>
        </Footer>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
