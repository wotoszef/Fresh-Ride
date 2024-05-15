import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContactElement = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  font-size: 16px;
  font-weight: bolder;
  @media (max-width: 576px) {
    font-size: 12px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
