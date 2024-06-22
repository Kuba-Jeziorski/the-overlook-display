import Header from "../components/Header";
import HomepageCards from "../components/HomepageCards";
import HomepageHero from "../components/HomepageHero";
import Title from "../components/Title";

function Homepage() {
  return (
    <>
      <Header source="/src/assets/img/it.png" alt="Some alt">
        <Title tag="h1">
          Lorem ipsum dolor <span className="claret">sit amet</span>
        </Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          accumsan dictum sollicitudin. Integer volutpat felis id ligula
          vestibulum, vel malesuada diam sagittis. Sed ut dignissim libero.
          Quisque pretium, justo ut condimentum egestas, magna turpis
          condimentum velit, et dictum neque nibh nec augue. Vivamus in finibus
          elit, nec luctus eros. Nam volutpat, mi eget vulputate suscipit, elit
          libero viverra justo, sit amet auctor augue massa vel dolor. Proin
          gravida dictum tempus. Maecenas commodo ligula a sollicitudin
          suscipit. Nullam porttitor nulla vitae vehicula imperdiet
        </p>
      </Header>
      <HomepageHero />
      <HomepageCards />
    </>
  );
}

export default Homepage;
