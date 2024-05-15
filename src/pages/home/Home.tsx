import { Wrapper } from "./Home.style";
import Customize from "./customize/Customize";
import HomeAbout from "./short-about/HomeAbout";
import Scents from "./scents/Scents";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <Wrapper>
      <Customize />
      <HomeAbout />
      <Scents />
      <Footer />
    </Wrapper>
  );
};

export default Home;
