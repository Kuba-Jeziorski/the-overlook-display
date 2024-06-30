import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Books from "./pages/Books";
import Villains from "./pages/Villains";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { MainProvider } from "./contexts/MainContext.jsx";
import "../src/index.css";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Navigation />
        <div className="home-bg">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="books" element={<Books url="books" />} />
            <Route path="villains" element={<Villains url="villains" />} />
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
