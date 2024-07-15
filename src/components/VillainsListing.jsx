import PropTypes from "prop-types";
import VillainsListingElement from "./VillainsListingElement";

function VillainsListing({ villainsListing }) {
  return (
    <ul className="container-listing">
      {villainsListing.map((villain) => (
        <VillainsListingElement villain={villain} key={villain.id} />
      ))}
    </ul>
  );
}

export default VillainsListing;

VillainsListing.propTypes = {
  villainsListing: PropTypes.object,
};
