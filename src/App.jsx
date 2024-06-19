import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://stephen-king-api.onrender.com/api/books"
        );
        const data = await res.json();
        setBooks(data.data);
      } catch {
        alert(`There was an error loading data`);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    }
    fetchBooks();
  }, []);

  console.log(books);

  return (
    <>
      <h1>Title</h1>
      {isLoaded && (
        <ul>
          {books.map((book) => {
            return <li key={book.id}>{book.Title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
