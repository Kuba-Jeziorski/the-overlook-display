import PropTypes from "prop-types";

function HeaderDescription({ children }) {
  return <p className="big">{children}</p>;
}

HeaderDescription.propTypes = {
  children: PropTypes.node,
};

export default HeaderDescription;
