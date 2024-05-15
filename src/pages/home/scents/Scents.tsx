import {
  ScentsContent,
  ScentsWrapper,
  SlideContainer,
  SubTitle,
  Title,
} from "./Scents.style";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "../../../lib/constants";

const Scents = () => {
  return (
    <ScentsWrapper>
      <ScentsContent>
        <Title>Nasz zapach, twój charakter</Title>
        <SlideContainer>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <img
                key={index}
                src={slideImage.image}
                alt={slideImage.caption}
              />
            ))}
          </Slide>
        </SlideContainer>
        <SubTitle>
          Wyraź siebie na drodze: Pozwól, aby twój zapach mówił głośno o twojej
          osobowości za pomocą personalizowanych odświeżaczy samochodowych!
        </SubTitle>
      </ScentsContent>
    </ScentsWrapper>
  );
};

export default Scents;
