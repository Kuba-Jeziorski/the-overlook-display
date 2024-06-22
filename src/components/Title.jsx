import React from "react";
import PropTypes from "prop-types";

function Title({ children, tag }) {
  return React.createElement(tag, null, children);
}

Title.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};

export default Title;
