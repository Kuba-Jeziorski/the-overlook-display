import PropTypes from "prop-types";
import useFetchContent from "../hooks/useFetchContent";

function Villains({ url }) {
  const { fetchedContent, isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoaded) {
    return <div>Failed to load</div>;
  }

  const fiveVillains = [...fetchedContent];
  fiveVillains.length = 5;

  return (
    <div>
      <ul>
        {fiveVillains.map((villain) => (
          <li key={villain.types_id}>{villain.name}</li>
        ))}
      </ul>
    </div>
  );
}

Villains.propTypes = {
  url: PropTypes.string,
};

export default Villains;