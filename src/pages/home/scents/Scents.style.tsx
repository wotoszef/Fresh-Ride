import styled from "styled-components";

export const ScentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    margin-bottom: 150px;
  }
`;

export const ScentsContent = styled.div`
  position: relative;
  width: 75%;
  height: 75%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
  }
`;

export const SlideContainer = styled.div`
  width: 420px;
  @media (max-width: 576px) {
    width: 360px;
  }
`;

export const Title = styled.div`
  width: 50%;
  font-size: 28px;
  font-weight: bolder;
  color: #32aa27;
  text-align: center;
  padding-bottom: 20px;
`;

export const SubTitle = styled.div`
  padding-top: 20px;
  font-size: 22px;
  line-height: 40px;
  width: 50%;
  text-align: center;
  height: 200px;
`;
