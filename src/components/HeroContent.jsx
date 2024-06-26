import HeroItem from "./HeroItem";
import styles from "./HeroContent.module.css";

function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <HeroItem url="villains" img="villains.png">
        VILLAINS
      </HeroItem>
      <HeroItem url="books" img="books.png">
        BOOKS
      </HeroItem>
    </div>
  );
}

export default HeroContent;
