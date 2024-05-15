import styled from "styled-components";

export const DetailsFormContainer = styled.div`
  display: flex;
  box-shadow: 0 0 20px rgb(0, 0, 0, 25%);
  justify-content: space-between;
  width: 100%;
  background-color: #f1f1f1;
  margin-top: 60px;
  border-radius: 15px;
  padding: 40px 40px;
  @media (max-width: 576px) {
    width: 80%;
    justify-content: center;
  }
  @media (min-width: 1600px) {
    height: 60%;
    width: 70%;
  }
`;

export const FormImage = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  @media (min-width: 1600px) {
    height: 60%;
    width: 80%;
  }
`;

export const ShippingDetails = styled.div`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  padding: 40px 0 20px;
  box-sizing: border-box;
`;

export const FreshenerPreview = styled.div`
  width: 55%;
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 1600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 35%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const PriceText = styled.div`
  font-size: 25px;
  font-weight: bolder;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CustomizeButton = styled.button`
  margin-top: 20px;
  font-size: 28px;
  font-weight: bolder;
  color: white;
  background-color: #42b925;
  padding: 20px 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 576px) {
    font-size: 20px;
    padding: 15px 30px;
  }
`;
