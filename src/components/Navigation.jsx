import styles from "./Navigation.module.css";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className={styles.bordered}>
      <Link to="/">Home</Link>
      <Link to="books">Books</Link>
    </nav>
  );
}

export default Navigation;
