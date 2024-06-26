import PropTypes from "prop-types";

import Title from "./Title";

function HeroHeader({ children }) {
  return (
    <div className="hero-header">
      <Title tag="h1" />
      {children}
    </div>
  );
}

HeroHeader.propTypes = {
  children: PropTypes.node,
};

export default HeroHeader;
