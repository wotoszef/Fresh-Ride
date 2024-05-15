import styled from "styled-components";

export const HomeAboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#171044 23%, #ffffff 100%);
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
`;

export const HomeAboutContent = styled.div`
  position: relative;
  width: 75%;
  height: 75%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  color: white;
  line-height: 40px;
  @media (max-width: 576px) {
    width: 70%;
  }
`;

export const AboutTitle = styled.div`
  font-size: 22px;
  color: #32aa27;
  font-weight: bolder;
  height: 27px;
  margin-bottom: 15px;
`;

export const AboutDescription = styled.div`
  font-size: 20px;
`;

export const FreshenerImg = styled.img`
  border-radius: 15px;
  width: 20%;
  height: 7%;
  @media (max-width: 920px) {
    display: none;
  }
`;
