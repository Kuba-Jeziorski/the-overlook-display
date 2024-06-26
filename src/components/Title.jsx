import React from "react";
import PropTypes from "prop-types";

function Title({ children, tag, extraClass }) {
  return <>{React.createElement(tag, { className: extraClass }, children)}</>;
}

Title.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  extraClass: PropTypes.string,
};

export default Title;
