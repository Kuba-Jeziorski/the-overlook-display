import { Link, useParams } from "react-router-dom";
import { useMainContext } from "../contexts/MainContext";
import useFetchContent from "../hooks/useFetchContent";
import Title from "../components/Title";

function Book() {
  const parentUrl = "books";
  let { id } = useParams();
  id = Number(id);
  const { books, setBooks } = useMainContext();

  const { isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${parentUrl}`,
    books,
    setBooks
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoaded) {
    return <div>Failed to load</div>;
  }

  let lastBookId, nextBookId, previousBookId;
  if (isLoaded) {
    // lastBookId = villains.at(-1).id;
    lastBookId = books[books.length - 1].id;
    nextBookId = id === lastBookId ? 1 : id + 1;
    previousBookId = id === 1 ? lastBookId : id - 1;
  }

  const currentBook = books[id - 1];
  const {
    id: index,
    Year: year,
    Title: title,
    Pages: pages,
    villains,
  } = currentBook;

  const isVillainsEmpty = villains.length === 0;

  let villainsArray;
  if (!isVillainsEmpty) {
    // villainsArray = [...villains];
    villainsArray = [...villains].map((singleVillain) => ({
      ...singleVillain,
      villainId: singleVillain.url.split("/").at(-1),
    }));
    console.log(villainsArray);
  }

  return (
    <div className="wrapper-small centered">
      <div className="container">
        <Title tag="h1">{title}</Title>
        <div className="single-item-wrapper">
          <div className="order-buttons-wrapper">
            <Link className="link primary" to={`/books/${previousBookId}`}>
              PREVIOUS
            </Link>
            <Link className="link primary" to={`/villains/${nextBookId}`}>
              NEXT
            </Link>
          </div>
          <p>ID: {index}</p>
          <p>YEAR: {year}</p>
          <p>PAGES: {pages}</p>
          {!isVillainsEmpty && (
            <p>
              VILLAIN(S):
              {villainsArray.map((villain, index) => (
                <>
                  {index > 0 && ","}
                  <Link
                    key={villain.id}
                    to={`/villains/${villain.villainId}`}
                    class="red"
                  >
                    {` ${villain.name.toUpperCase()}`}
                  </Link>
                </>
              ))}
            </p>
          )}
        </div>
        <div className="button-wrapper">
          <Link className="link secondary" to="/books">
            BACK TO BOOKS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Book;
