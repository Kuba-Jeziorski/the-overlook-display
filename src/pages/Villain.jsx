import { Link, useParams } from "react-router-dom";
import { useMainContext } from "../contexts/MainContext";
import useFetchContent from "../hooks/useFetchContent";
import Title from "../components/Title";

function Villain() {
  const url2 = "villains";
  let { id } = useParams();
  id = Number(id);
  const { villains, setVillains } = useMainContext();

  const { isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url2}`,
    villains,
    setVillains
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoaded) {
    return <div>Failed to load</div>;
  }
  let lastVillainId, nextVillainId, previousVillainId;
  if (isLoaded) {
    // lastVillainId = villains.at(-1).id;
    lastVillainId = villains[villains.length - 1].id;
    nextVillainId = id === lastVillainId ? 1 : id + 1;
    previousVillainId = id === 1 ? lastVillainId : id - 1;
  }

  const currentVillain = villains[id - 1];
  const { id: index, books, name, gender, status } = currentVillain;

  const isBooksEmpty = books.length === 0;
  console.log(currentVillain);
  console.log(`will it be shown?`, !isBooksEmpty);

  let bookTitle, bookURL, bookId;
  if (!isBooksEmpty) {
    ({ title: bookTitle, url: bookURL } = books[0]);
    bookId = bookURL.split("/").at(-1);
  }

  return (
    <div className="wrapper-small">
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
          {!isBooksEmpty && (
            <p>
              BOOK:{" "}
              <Link class="red" to={`/books/${bookId}`}>
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
