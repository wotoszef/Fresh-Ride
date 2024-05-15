import {
  ApplyButton,
  DiscountInput,
  DiscountsContainer,
  DiscountShippingWrapper,
  DiscountWindowWrapper,
  OrderContainer,
  OrderData,
  OrderDetails,
  OrderName,
  OrderQuanity,
  OrderScentCrop,
  PriceContainer,
  PriceText,
  Shipping,
  ShippingDetails,
  ShippingDetailsContainer,
  TotalText,
  UploadedPhotoContainer,
  UploadedPhotoMock,
  UploadedPhotoText,
} from "./DiscountWindow.style";

const DiscountWindow = () => {
  return (
    <DiscountWindowWrapper>
      <OrderContainer>
        <OrderDetails>
          <OrderQuanity>1x</OrderQuanity>
          <OrderData>
            <OrderName>Custom fresh drive</OrderName>
            <OrderScentCrop>Scent/Crop</OrderScentCrop>
          </OrderData>
        </OrderDetails>
        <OrderName>$11.99</OrderName>
      </OrderContainer>
      <UploadedPhotoContainer>
        {/*TODO change mock*/}
        <UploadedPhotoMock />
        <UploadedPhotoText>Your uploaded photo</UploadedPhotoText>
      </UploadedPhotoContainer>
      <DiscountsContainer>
        <DiscountInput placeholder={"Discount code"} />
        <ApplyButton>Apply</ApplyButton>
      </DiscountsContainer>
      <DiscountShippingWrapper>
        <Shipping>Shipping</Shipping>
        <div>Calculated at next step</div>
      </DiscountShippingWrapper>
      <ShippingDetailsContainer>
        <ShippingDetails>
          Orders usually ship out within 8-10 business days from the date of
          purchase. Order are shipped via the United States Postal Service
          (USPS) and usually takes about 3-5 days to be delivered. Please note
          that shipments are sometimes lost by the Unites States Postal Service
          in transit. If you have not received your order within 14 days please
          contact us via email at Support@DangleIt.com
        </ShippingDetails>
      </ShippingDetailsContainer>
      <PriceContainer>
        <TotalText>TOTAL</TotalText>
        <PriceText>$11.99</PriceText>
      </PriceContainer>
    </DiscountWindowWrapper>
  );
};

export default DiscountWindow;
