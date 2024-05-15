import {
  AboutContainer,
  AboutUs,
  AboutUsSpan,
  AboutUsText,
  AboutWrapper,
} from "./About.style";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

const About = () => (
  <AboutWrapper>
    <AboutContainer>
      <Navigation />
      <AboutUs>O nas</AboutUs>
      <AboutUsText>
        <span style={{ fontWeight: "bolder" }}>Fresh Ride</span> oferuje
        personalizowane rozwiązania, umożliwiając klientom wybór własnego wzoru,
        logo lub tekstu, co pozwala stworzyć unikatowe odświeżacze dla ich
        pojazdów.
      </AboutUsText>
      <AboutUsText>
        Kładąc duży nacisk na jakość, korzystamy z wysokiej jakości materiałów i
        składników zapachowych, aby zapewnić trwałe i skuteczne odświeżenie
        powietrza w samochodach.
      </AboutUsText>
      <AboutUsText>
        Stawiamy również na wysoką jakość obsługi klienta, zapewniając przyjazny
        i pomocny zespół, który służy wsparciem i doradztwem na każdym etapie
        procesu zakupowego, od wyboru produktu po dostawę i obsługę
        posprzedażną.
      </AboutUsText>
    </AboutContainer>
    <Footer />
  </AboutWrapper>
);

export default About;
