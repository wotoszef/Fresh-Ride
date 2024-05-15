import {
  AboutDescription,
  AboutText,
  AboutTitle,
  FreshenerImg,
  HomeAboutContent,
  HomeAboutWrapper,
  HomeContainer,
} from "./HomeAbout.style";
import freshener from "../../../assets/pictures/freshener.jpg";

const HomeAbout = () => {
  return (
    <HomeAboutWrapper>
      <HomeAboutContent>
        <HomeContainer>
          <AboutText>
            <AboutTitle>FRESH RIDE</AboutTitle>
            <AboutDescription>
              W FreshRide oddajemy się przemianie zwykłych odświeżaczy
              samochodowych w niezwykłe dzieła sztuki.
            </AboutDescription>
          </AboutText>
          <AboutText>
            <AboutTitle />
            <AboutDescription>
              Z zaangażowaniem w jakość, dumnie dostarczamy personalizowane
              odświeżacze samochodowe, które przekraczają oczekiwania.
            </AboutDescription>
          </AboutText>
          <FreshenerImg src={freshener} alt="" />
        </HomeContainer>
      </HomeAboutContent>
    </HomeAboutWrapper>
  );
};

export default HomeAbout;
