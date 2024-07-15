import PropTypes from "prop-types";
import BookListingElement from "./BookListingElement";

function BooksListing({ booksListing }) {
  return (
    <ul className="container-listing">
      {booksListing.map((book) => (
        <BookListingElement book={book} key={book.id} />
      ))}
    </ul>
  );
}

export default BooksListing;

BooksListing.propTypes = {
  booksListing: PropTypes.object,
};
