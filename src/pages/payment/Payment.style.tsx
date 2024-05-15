import styled from "styled-components";

export const PaymentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (min-width: 1600px) {
    justify-content: center;
    height: 100vh;
  }
`;
