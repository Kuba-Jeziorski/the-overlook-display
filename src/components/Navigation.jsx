import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink className={styles.logo} to="/"></NavLink>
      <div className={styles.menu}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : ""
          }
          to="books"
        >
          Books
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : ""
          }
          to="villains"
        >
          Villains
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
