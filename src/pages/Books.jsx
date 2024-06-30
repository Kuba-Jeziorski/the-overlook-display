import PropTypes from "prop-types";
import { useMainContext } from "../contexts/MainContext";
import styles from "./Books.module.css";
import useFetchContent from "../hooks/useFetchContent";

function Books({ url }) {
  const { books, setBooks } = useMainContext();

  const { isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url}`,
    books,
    setBooks
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoaded) {
    return <div>Failed to load</div>;
  }

  return (
    <div className={styles.myBooks}>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.Title}</li>
        ))}
      </ul>
    </div>
  );
}

Books.propTypes = {
  url: PropTypes.string,
  books: PropTypes.object,
  setBooks: PropTypes.func,
};

export default Books;
