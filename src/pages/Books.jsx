import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../contexts/MainContext";

import useFetchContent from "../hooks/useFetchContent";
import Title from "../components/Title";
import HeaderDescription from "../components/HeaderDescription";
import Button from "../components/Button";

function Books({ url }) {
  const {
    books,
    setBooks,
    booksAmount,
    setBooksAmount,
    booksListing,
    setBooksListing,
  } = useMainContext();

  const { isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url}`,
    books,
    setBooks
  );

  useEffect(() => {
    if (isLoaded) {
      const newBooksListing = books.slice(0, booksAmount);
      setBooksListing(newBooksListing);
    }
  }, [books, isLoaded, booksAmount, setBooksListing]);

  const handleAmount = () => {
    setBooksAmount((amount) => amount + 3);

    const newBooksListing = books.slice(0, booksAmount);
    setBooksListing(newBooksListing);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoaded) {
    return <div>Failed to load</div>;
  }

  return (
    <div className="wrapper-medium">
      <div className="container">
        <Title tag="h1">Books</Title>
        <HeaderDescription>
          Welcome to the Books page of The Overlook Display. Immerse yourself in
          the extensive and captivating world of Stephen King&apos;s literary
          works. This section offers comprehensive information on all of
          King&apos;s novels, from his most iconic classics to his latest
          releases. Each book entry provides a detailed overview of the plot,
          key characters, and central themes, giving you a deeper understanding
          of what makes these stories so compelling. Whether you are a long-time
          fan or new to King&apos;s universe, our curated pages will guide you
          through the spellbinding tales that have cemented Stephen King&apos;s
          place as a master of horror and storytelling. Dive in and discover the
          magic and terror that lie within each book.
        </HeaderDescription>
        <ul className="container-listing">
          {booksListing.map((book) => (
            <li className="container-listing-item" key={book.id}>
              <p className="item-title">
                {book.id}. {book.Title.toUpperCase()}
              </p>
              <p className="big bold">YEAR: {book.Year}</p>
              <Link className="link primary" to={`/books/${book.id}`}>
                SEE MORE
              </Link>
            </li>
          ))}
        </ul>
        <div className="button-wrapper">
          <Button type="tertiary" onPress={handleAmount}>
            SEE MORE
          </Button>
        </div>
      </div>
    </div>
  );
}

Books.propTypes = {
  url: PropTypes.string,
  books: PropTypes.object,
  setBooks: PropTypes.func,
};

export default Books;
