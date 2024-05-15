import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: #171044;
  box-sizing: border-box;
  padding: 20px 10px;
`;

export const PolicyWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const PolicyItem = styled.div`
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #b0b0b0;
  }
`;

export const LogoWithMediaWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    width: 40%;
  }
`;

export const MediaWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FooterLogo = styled.div`
  font-size: 30px;
  font-family: "Jolly Lodger";
`;

export const SocialIcons = styled.img`
  width: 100%;
  height: 100%;
  max-width: 30px;
  cursor: pointer;
`;
