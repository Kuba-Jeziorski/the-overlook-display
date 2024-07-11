import { Link, useParams } from "react-router-dom";
import { useVillains } from "../hooks/useFetchContent";
import Title from "../components/Title";

function Villain() {
  let { id } = useParams();
  id = Number(id);

  const { villains, loadingStatus } = useVillains();

  if (loadingStatus === "pending" || loadingStatus === "idle") {
    return <div>Loading...</div>;
  }

  if (loadingStatus === "failed") {
    return <div>Failed to load</div>;
  }

  const currentVillainIndex = villains.findIndex(
    (villain) => villain.id === id
  );
  console.log(currentVillainIndex);

  const nextVillainId =
    villains[(currentVillainIndex + 1) % villains.length].id;
  const previousVillainId =
    villains[(currentVillainIndex - 1 + villains.length) % villains.length].id;

  const currentVillain = villains[currentVillainIndex];
  const { id: index, books, name, gender, status } = currentVillain;

  let bookTitle, bookURL, bookId;
  if (books.length > 0) {
    ({ title: bookTitle, url: bookURL } = books[0]);
    bookId = bookURL.split("/").at(-1);
  }

  return (
    <div className="wrapper-small centered">
      <div className="container">
        <Title tag="h1">{name}</Title>
        <div className="single-item-wrapper">
          <div className="order-buttons-wrapper">
            <Link
              className="link primary"
              to={`/villains/${previousVillainId}`}
            >
              PREVIOUS
            </Link>
            <Link className="link primary" to={`/villains/${nextVillainId}`}>
              NEXT
            </Link>
          </div>
          <p>ID: {index}</p>
          <p>GENDER: {gender !== null ? gender.toUpperCase() : "UNDEFINED"}</p>
          <p>STATUS: {status.toUpperCase()}</p>
          {books.length > 0 && (
            <p>
              BOOK:{" "}
              <Link className="red" to={`/books/${bookId}`}>
                {bookTitle.toUpperCase()}
              </Link>
            </p>
          )}
        </div>
        <div className="button-wrapper">
          <Link className="link secondary" to="/villains">
            BACK TO VILLAINS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Villain;
