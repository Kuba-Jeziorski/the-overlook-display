import HomepageCard from "./HomepageCard";
import Title from "./Title";

function HomepageCards() {
  return (
    <div className="hero-cards">
      <HomepageCard
        imgSource="/src/assets/img/misery.png"
        imgAlt="some alt"
        buttonType="primary"
        buttonSource="books"
        buttonText="See more books"
      >
        <Title tag="h3">Lorem</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>
      </HomepageCard>
      <HomepageCard
        imgSource="/src/assets/img/shining.png"
        imgAlt="some alt"
        buttonType="primary"
        buttonSource="villains"
        buttonText="See more villains"
      >
        <Title tag="h3">Lorem2</Title>
        <p>
          Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>
      </HomepageCard>
    </div>
  );
}

export default HomepageCards;
