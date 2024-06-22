import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink className={styles.logo} to="/">
        <img src="/src/assets/img/logo-light.svg" />
      </NavLink>
      <div className={styles.menu}>
        <NavLink to="books">Books</NavLink>
        <NavLink to="villains">Villains</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
