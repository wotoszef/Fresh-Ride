import styled from "styled-components";

export const PaymentDetailsWrapper = styled.div`
  max-width: 1400px;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 60px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const PaymentTitle = styled.div`
  font-size: 48px;
  font-weight: bolder;
  font-family: "Jolly Lodger";
`;

export const PaymentContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.div`
  font-size: 20px;
`;

export const PaymentButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
`;

export const PaymentButton = styled.button`
  font-size: 20px;
  color: white;
  border: none;
  padding: 15px 80px;
  border-radius: 15px;
  @media (max-width: 900px) {
    padding: 10px 30px;
    font-size: 16px;
  }
`;

export const PaymentDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaymentLabel = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

export const PaymentInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 0 20px 10px;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 3px;

  &::placeholder {
    color: #5e5e5e;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const CheckBoxText = styled.div`
  font-weight: lighter;
`;

export const PaymentInputHalf = styled.input`
  box-sizing: border-box;
  width: 49%;
  padding: 20px 0 20px 10px;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 3px;

  &::placeholder {
    color: #5e5e5e;
  }
`;

export const PaymentInputPart = styled.input`
  box-sizing: border-box;
  width: 30%;
  padding: 15px 0 15px 10px;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 5px;

  &::placeholder {
    color: #5e5e5e;
  }
`;

export const PaymentInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const PaymentButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ConfirmationButtons = styled.button`
  border: none;
  color: white;
  font-size: 22px;
  font-weight: bolder;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 0;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
