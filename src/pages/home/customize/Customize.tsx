import {
  CustomizeButton,
  CustomizeButtonContainer,
  CustomizeContent,
  CustomizeWrapper,
  LandingImage,
  Line,
  SubTitle,
  Title,
} from "./Customize.style";
import Navigation from "../../../components/navigation/Navigation";
import landingpage from "../../../assets/pictures/landingpage.png";
import { useNavigate } from "react-router-dom";

const Customize = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/customization");
  };
  return (
    <CustomizeWrapper>
      <CustomizeContent>
        <Navigation />
        <LandingImage src={landingpage} />
        <Title>Odkryj świeżość, dostosuj swój odświeżacz</Title>
        <CustomizeButtonContainer>
          <CustomizeButton onClick={onClick}>CUSTOMIZE</CustomizeButton>
          <SubTitle>Stwórzmy coś specjalnego!</SubTitle>
          <Line style={{ marginBottom: 40 }} />
        </CustomizeButtonContainer>
      </CustomizeContent>
    </CustomizeWrapper>
  );
};

export default Customize;
