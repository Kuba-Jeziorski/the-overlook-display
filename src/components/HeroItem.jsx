import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./HeroItem.module.css";
import Title from "./Title";

function HeroItem({ children, url, img }) {
  return (
    <Link
      className={styles.heroItem}
      to={url}
      style={{ backgroundImage: `url(/src/assets/img/${img})` }}
    >
      <Title tag="h2">{children}</Title>
    </Link>
  );
}

HeroItem.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string,
  img: PropTypes.string,
};

export default HeroItem;
