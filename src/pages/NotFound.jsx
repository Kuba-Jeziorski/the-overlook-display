import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import Title from "../components/Title";

function NotFound() {
  return (
    <AnimatedPage>
      <div className="wrapper-small centered not-found">
        <div className="container">
          <Title tag="h1">PAGE IS NOT FOUND!</Title>
          <div className="button-wrapper">
            <Link className="link primary" to="/">
              GO BACK HOME
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default NotFound;
