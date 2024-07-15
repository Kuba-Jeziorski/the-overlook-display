import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BookListingElement({ book }) {
  return (
    <li className="container-listing-item" key={book.id}>
      <p className="item-title">
        {book.id}. {book.Title.toUpperCase()}
      </p>
      <p className="big bold">YEAR: {book.Year}</p>
      <Link className="link primary" to={`/books/${book.id}`}>
        SEE MORE
      </Link>
    </li>
  );
}

export default BookListingElement;

BookListingElement.propTypes = {
  book: PropTypes.object,
};
