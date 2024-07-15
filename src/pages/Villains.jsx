import PropTypes from "prop-types";
import { useMemo, useState } from "react";

import { useVillains } from "../hooks/useFetchContent";
import Title from "../components/Title";
import HeaderDescription from "../components/HeaderDescription";
import Button from "../components/Button";
import VillainsListing from "../components/VillainsListing";
import Loader from "../components/Loader";
import AnimatedPage from "../components/AnimatedPage";

function Villains() {
  const [villainsAmount, setVillainsAmount] = useState(3);

  const { villains, loadingStatus } = useVillains();

  const handleAmountIncrease = () => {
    setVillainsAmount((amount) => amount + 3);
  };

  const villainsListing = useMemo(() => {
    return villains.slice(0, villainsAmount);
  }, [villains, villainsAmount]);

  if (loadingStatus === "pending") {
    return <Loader />;
  }
  if (loadingStatus === "failed") {
    return <div>Failed to load</div>;
  }

  return (
    <AnimatedPage>
      <div className="wrapper-medium">
        <div className="container">
          <Title tag="h1">VILLAINS</Title>
          <HeaderDescription>
            Welcome to the Villains page of The Overlook Display. Here, we delve
            into the dark and sinister minds that populate the universe of
            Stephen King&apos;s literary masterpieces. From the malevolent
            spirits and monstrous beings to the deranged humans driven by
            unspeakable urges, this section provides an in-depth look at the
            antagonists that bring fear and suspense to King&apos;s narratives.
            Discover detailed profiles of each villain, exploring their origins,
            motivations, and the chilling roles they play in shaping the
            unforgettable horror that defines Stephen King&apos;s stories. Join
            us as we unravel the complexities of these nightmarish figures and
            the terror they unleash.
          </HeaderDescription>
          <VillainsListing villainsListing={villainsListing} />
          <div className="button-wrapper">
            <Button type="secondary" onPress={handleAmountIncrease}>
              SEE MORE
            </Button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

Villains.propTypes = {
  url: PropTypes.string,
  villains: PropTypes.object,
  setVillains: PropTypes.func,
};

export default Villains;
