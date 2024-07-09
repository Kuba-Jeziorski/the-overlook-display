import PropTypes from "prop-types";
import { useEffect } from "react";

import useFetchContent from "../hooks/useFetchContent";
import { useMainContext } from "../contexts/MainContext";
import Title from "../components/Title";
import HeaderDescription from "../components/HeaderDescription";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Villains({ url }) {
  const {
    villains,
    setVillains,
    villainsAmount,
    setVillainsAmount,
    villainsListing,
    setVillainsListing,
  } = useMainContext();

  const { isLoading, isLoaded } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/${url}`,
    villains,
    setVillains
  );

  useEffect(() => {
    if (isLoaded) {
      const newVillainsListing = villains.slice(0, villainsAmount);
      setVillainsListing(newVillainsListing);
    }
  }, [villains, isLoaded, villainsAmount, setVillainsListing]);

  const handleAmount = () => {
    setVillainsAmount((amount) => amount + 3);

    const newVillainsListing = villains.slice(0, villainsAmount);
    setVillainsListing(newVillainsListing);
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
        <Title tag="h1">VILLAINS</Title>
        <HeaderDescription>
          Welcome to the Villains page of The Overlook Display. Here, we delve
          into the dark and sinister minds that populate the universe of Stephen
          King&apos;s literary masterpieces. From the malevolent spirits and
          monstrous beings to the deranged humans driven by unspeakable urges,
          this section provides an in-depth look at the antagonists that bring
          fear and suspense to King&apos;s narratives. Discover detailed
          profiles of each villain, exploring their origins, motivations, and
          the chilling roles they play in shaping the unforgettable horror that
          defines Stephen King&apos;s stories. Join us as we unravel the
          complexities of these nightmarish figures and the terror they unleash.
        </HeaderDescription>
        <ul className="container-listing">
          {villainsListing.map((villain) => (
            <li className="container-listing-item" key={villain.id}>
              <p className="item-title">
                {villain.id}. {villain.name.toUpperCase()}
              </p>
              <p className="big bold">STATUS: {villain.status.toUpperCase()}</p>
              <Link className="link primary" to={`/villains/${villain.id}`}>
                SEE MORE
              </Link>
            </li>
          ))}
        </ul>
        <div className="button-wrapper">
          <Button type="secondary" onPress={handleAmount}>
            SEE MORE
          </Button>
        </div>
      </div>
    </div>
  );
}

Villains.propTypes = {
  url: PropTypes.string,
  villains: PropTypes.object,
  setVillains: PropTypes.func,
};

export default Villains;
