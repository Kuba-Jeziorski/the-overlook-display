import PropTypes from "prop-types";
import useFetchContent from "../hooks/useFetchContent";

function Books({ url, books }) {
  const { fetchedContent, isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url}`,
    books
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoaded) {
    return <div>Failed to load</div>;
  }

  return (
    <div>
      <ul>
        {fetchedContent.map((book) => (
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
