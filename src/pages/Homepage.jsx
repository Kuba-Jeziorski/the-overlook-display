import Hero from "../components/Hero";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.wrapper}>
      <Hero />
    </div>
  );
}

export default Homepage;
