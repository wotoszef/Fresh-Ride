import styled from "styled-components";

export const CustomizeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#95f08d, #171044);
  display: flex;
  justify-content: center;
`;

export const CustomizeContent = styled.div`
  width: 75%;
  height: 75%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  z-index: 999;
  font-size: 48px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    font-size: 36px;
  }
`;

export const LandingImage = styled.img`
  display: flex;
  flex-basis: 100%;
`;

export const CustomizeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomizeButton = styled.button`
  background-color: #09d6d6;
  border: none;
  font-size: 48px;
  color: white;
  padding: 20px 60px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  margin: 10px 0 20px;
  transition: 0.6s;
  @media (max-width: 576px) {
    font-size: 24px;
    padding: 10px 30px;
  }
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const Line = styled.div`
  background-color: #d9d9d9;
  width: 50%;
  height: 2px;
`;
