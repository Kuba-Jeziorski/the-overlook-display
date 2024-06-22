import PropTypes from "prop-types";

function Header({ children, source, alt }) {
  return (
    <header className="wrapper-main">
      <div className="header">
        <div className="header-left">{children}</div>
        <div className="header-right">
          <img src={source} alt={alt} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  source: PropTypes.string,
};

export default Header;
