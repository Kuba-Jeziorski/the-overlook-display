import { Link, useParams } from "react-router-dom";
import Title from "../components/Title";
import { useBooks } from "../hooks/useFetchContent";
import React from "react";
import AnimatedPage from "../components/AnimatedPage";

function Book() {
  let { id } = useParams();
  id = Number(id);

  const { books, loadingStatus } = useBooks();

  if (loadingStatus === "pending" || loadingStatus === "idle") {
    return <div>Loading...</div>;
  }
  if (loadingStatus === "failed") {
    return <div>Failed to load</div>;
  }

  const currentBookIndex = books.findIndex((book) => book.id === id);
  const nextBookId = books[(currentBookIndex + 1) % books.length].id;
  const previousBookId =
    books[(currentBookIndex - 1 + books.length) % books.length].id;

  const currentBook = books[currentBookIndex];
  const {
    id: index,
    Year: year,
    Title: title,
    Pages: pages,
    villains,
  } = currentBook;

  const villainsList = villains
    .map((singleVillain) => ({
      ...singleVillain,
      villainId: singleVillain.url.split("/").at(-1),
    }))
    .map((villain, index) => (
      <React.Fragment key={villain.villainId}>
        {index > 0 && ", "}
        <Link
          key={villain.id}
          to={`/villains/${villain.villainId}`}
          className="red"
        >
          {`${villain.name.toUpperCase()}`}
        </Link>
      </React.Fragment>
    ));

  return (
    <AnimatedPage>
      <div className="wrapper-small centered">
        <div className="container">
          <Title tag="h1">{title}</Title>
          <div className="single-item-wrapper">
            <div className="order-buttons-wrapper">
              <Link className="link primary" to={`/books/${previousBookId}`}>
                PREVIOUS
              </Link>
              <Link className="link primary" to={`/books/${nextBookId}`}>
                NEXT
              </Link>
            </div>
            <p>ID: {index}</p>
            <p>YEAR: {year}</p>
            <p>PAGES: {pages}</p>
            {villainsList.length > 0 && <p>VILLAIN(S): {villainsList}</p>}
          </div>
          <div className="button-wrapper">
            <Link className="link secondary" to="/books">
              BACK TO BOOKS
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Book;
