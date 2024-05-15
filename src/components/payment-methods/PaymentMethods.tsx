import {
  PaymentButton,
  PaymentButtonsContainer,
  PaymentContent,
  SubTitle,
} from "../payment-details/PaymentDetails.style";

const PaymentMethods = () => {
  return (
    <PaymentContent>
      <SubTitle>Payment methods</SubTitle>
      <PaymentButtonsContainer>
        <PaymentButton style={{ backgroundColor: "#59A3FA" }}>
          PayDot
        </PaymentButton>
        <PaymentButton style={{ backgroundColor: "#FEB446" }}>
          PayPal
        </PaymentButton>
        <PaymentButton style={{ backgroundColor: "#000000" }}>
          G Pay
        </PaymentButton>
      </PaymentButtonsContainer>
    </PaymentContent>
  );
};

export default PaymentMethods;
