import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function VillainsListingElement({ villain }) {
  return (
    <li className="container-listing-item">
      <p className="item-title">
        {villain.id}. {villain.name.toUpperCase()}
      </p>
      <p className="big bold">STATUS: {villain.status.toUpperCase()}</p>
      <Link className="link primary" to={`/villains/${villain.id}`}>
        SEE MORE
      </Link>
    </li>
  );
}

export default VillainsListingElement;

VillainsListingElement.propTypes = {
  villain: PropTypes.object,
};
