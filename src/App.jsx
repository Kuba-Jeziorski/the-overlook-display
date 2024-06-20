import Books from "./components/Books";
import Villains from "./components/Villains";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation></Navigation>
        <Routes>
          <Route index element={<h1>Homepage</h1>} />
          <Route path="books" element={<Books url="books" />} />
          <Route path="villains" element={<Villains url="villains" />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
