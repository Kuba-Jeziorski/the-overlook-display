import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, type, to }) {
  return (
    <Link className={`btn ${type ? type : ""}`} to={to}>
      {children}
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
