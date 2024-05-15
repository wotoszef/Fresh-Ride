import { PaymentWrapper } from "./Payment.style";
import PaymentDetails from "../../components/payment-details/PaymentDetails";
import DiscountWindow from "../../components/discount-window/DiscountWindow";

const Payment = () => {
  return (
    <PaymentWrapper>
      <PaymentDetails />
      <DiscountWindow />
    </PaymentWrapper>
  );
};

export default Payment;
