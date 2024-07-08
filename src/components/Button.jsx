import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ type = "primary", onPress, children }) {
  const buttonClasses = `${styles[type]} ${styles.btn}`;

  return (
    <a onClick={onPress} className={buttonClasses}>
      {children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
