import "../src/index.css";

import Books from "./components/Books";
import Villains from "./components/Villains";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation></Navigation>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="books" element={<Books url="books" />} />
          <Route path="villains" element={<Villains url="villains" />} />
        </Routes>
        <Footer>
          Design & code
          <Link to="https://github.com/Kuba-Jeziorski"> Kuba-Jeziorski</Link>
        </Footer>
      </>
    </BrowserRouter>
  );
}

export default App;
