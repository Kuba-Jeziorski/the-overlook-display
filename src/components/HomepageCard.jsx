import PropTypes from "prop-types";
import Button from "./Button";

function HomepageCard({
  children,
  imgSource,
  imgAlt,
  buttonType,
  buttonSource,
  buttonText,
}) {
  return (
    <div className="hero-card">
      <div className="hero-card-content">
        <div className="hero-card-header">{children}</div>
        <img src={imgSource} alt={imgAlt} />
      </div>
      <div className="hero-card-button-wrapper">
        <Button type={buttonType} to={buttonSource}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

HomepageCard.propTypes = {
  buttonType: PropTypes.string,
  buttonSource: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.node,
  imgSource: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default HomepageCard;
