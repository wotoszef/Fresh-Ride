import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 576px) {
    justify-content: space-between;
  }
`;

export const NavElement = styled.div`
  font-size: 64px;
  font-family: "Jolly Lodger";
  min-width: 200px;
  @media (max-width: 576px) {
    font-size: 28px;
    min-width: 100px;
  }
`;
