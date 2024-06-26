import HeaderDescription from "./HeaderDescription";
import styles from "./Hero.module.css";
import HeroContent from "./HeroContent";
import HeroHeader from "./HeroHeader";
import Title from "./Title";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <HeroHeader>
        <Title tag="h1">THE OVERLOOK DISPLAY IS HERE!</Title>
        <HeaderDescription>
          Welcome to The Overlook Display, your comprehensive React app
          dedicated to the captivating universe of Stephen King&apos;s literary
          masterpieces. Dive into the eerie and enthralling world of King&apos;s
          novels through our meticulously curated pages. On the homepage,
          explore an overview of the app and recent updates. The books page
          offers detailed information on all of Stephen King&apos;s works,
          providing insights into the plots, characters, and themes that make
          his stories unforgettable. Meanwhile, the villains page delves into
          the dark and sinister antagonists that haunt King&apos;s narratives,
          offering a closer look at the forces of evil that drive the suspense
          and horror. Join us as we journey through the spine-chilling and
          fascinating realm of Stephen King&apos;s fiction.
        </HeaderDescription>
      </HeroHeader>
      <HeroContent />
    </div>
  );
}

export default Hero;
