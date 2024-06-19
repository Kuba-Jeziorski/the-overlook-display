import Books from "./components/Books";
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
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
