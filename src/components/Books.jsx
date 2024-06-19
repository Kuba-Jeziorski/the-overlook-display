import useFetchContent from "./useFetchContent";

useFetchContent;

function Books({ url }) {
  const { fetchedContent, isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url}`
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

export default Books;
