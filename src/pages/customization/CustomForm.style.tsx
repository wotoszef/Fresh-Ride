import styled from "styled-components";

export const CustomFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (min-width: 1600px) {
    height: 100vh;
    justify-content: flex-start;
  }
`;

export const CustomFormWrapper = styled.div`
  width: 75%;
  margin-bottom: 180px;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 260px;
  }
  @media (min-width: 1600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
