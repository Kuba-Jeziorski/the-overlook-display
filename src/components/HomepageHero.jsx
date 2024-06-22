import Title from "./Title";

function HomepageHero() {
  return (
    <section className="wrapper-main">
      <div className="hero">
        <div className="hero-header">
          <Title tag="h2">
            Lorem ipsum dolor <span className="red">sit amet</span>
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            accumsan dictum sollicitudin. Integer volutpat felis id ligula
            vestibulum, vel malesuada diam sagittis. Sed ut dignissim libero.
            Quisque pretium, justo ut condimentum egestas, magna turpis
            condimentum velit, et dictum neque nibh nec augue.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomepageHero;
