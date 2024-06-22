import PropTypes from "prop-types";
import styles from "./Footer.module.css";

function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>{children}</p>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
