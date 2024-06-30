import PropTypes from "prop-types";
import useFetchContent from "../hooks/useFetchContent";
import { useMainContext } from "../contexts/MainContext";

function Villains({ url }) {
  const { villains, setVillains } = useMainContext();

  const { isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url}`,
    villains,
    setVillains
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
        {villains.map((villain) => (
          <li key={villain.id}>{villain.name}</li>
        ))}
      </ul>
    </div>
  );
}

Villains.propTypes = {
  url: PropTypes.string,
  villains: PropTypes.object,
  setVillains: PropTypes.func,
};

export default Villains;
