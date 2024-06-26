import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Books from "./pages/Books";
import Villains from "./pages/Villains";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { MainContext } from "./contexts/MainContext.js";
import "../src/index.css";

function App() {
  const [books, setBooks] = useState({});
  const [villains, setVillains] = useState({});

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <MainContext.Provider value={{ books, villains }}>
        <div className="home-bg">
          <Routes>
            <Route index element={<Homepage />} />
            <Route
              path="books"
              element={<Books url="books" books={books} setBooks={setBooks} />}
            />
            <Route
              path="villains"
              element={
                <Villains
                  url="villains"
                  villains={villains}
                  setVillains={setVillains}
                />
              }
            />
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
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
