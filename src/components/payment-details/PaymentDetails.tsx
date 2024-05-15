import {
  CheckBoxContainer,
  CheckBoxText,
  ConfirmationButtons,
  PaymentButtonsWrapper,
  PaymentDetailsInfo,
  PaymentDetailsWrapper,
  PaymentInput,
  PaymentInputContainer,
  PaymentInputHalf,
  PaymentInputPart,
  PaymentLabel,
  PaymentTitle,
} from "./PaymentDetails.style";
import PaymentMethods from "../payment-methods/PaymentMethods";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const PaymentDetails = () => {
  return (
    <PaymentDetailsWrapper>
      <PaymentTitle>Fresh drive</PaymentTitle>
      <PaymentMethods />
      <PaymentDetailsInfo>
        <PaymentLabel>Contact</PaymentLabel>
        <PaymentInput placeholder={"E-mail"} />
        <CheckBoxContainer>
          <Checkbox sx={{ borderColor: "#AFAFAF", borderWidth: 1 }} />
          <CheckBoxText>Email me with news and offers</CheckBoxText>
        </CheckBoxContainer>
        <PaymentLabel>Shipping address</PaymentLabel>
        <FormControl fullWidth>
          <InputLabel>{"Country/Region"}</InputLabel>
          <Select
            sx={{ color: "black", fontWeight: "ligher" }}
            label={"Please select your country"}
          >
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
        <PaymentInputContainer>
          <PaymentInputHalf placeholder={"First name"} />
          <PaymentInputHalf placeholder={"Last name"} />
        </PaymentInputContainer>
        <PaymentInput placeholder={"Address"} />
        <PaymentInput
          style={{ margin: "10px 0" }}
          placeholder={"Apartment, suit, unit, etc."}
        />
        <PaymentInputContainer>
          <PaymentInputPart placeholder={"City"} />
          <PaymentInputPart placeholder={"Post code"} />
          <FormControl sx={{ width: "33%" }}>
            <InputLabel>{"Country/Region"}</InputLabel>
            <Select
              sx={{ color: "black", fontWeight: "ligher" }}
              label={"Please select your country"}
            >
              <MenuItem></MenuItem>
              <MenuItem></MenuItem>
              <MenuItem></MenuItem>
            </Select>
          </FormControl>
        </PaymentInputContainer>
        <PaymentButtonsWrapper>
          <ConfirmationButtons style={{ backgroundColor: "#616161" }}>
            Return
          </ConfirmationButtons>
          <ConfirmationButtons style={{ backgroundColor: "#42B925" }}>
            Continue to shipping
          </ConfirmationButtons>
        </PaymentButtonsWrapper>
      </PaymentDetailsInfo>
    </PaymentDetailsWrapper>
  );
};

export default PaymentDetails;
