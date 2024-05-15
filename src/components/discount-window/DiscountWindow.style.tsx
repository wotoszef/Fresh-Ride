import styled from "styled-components";

export const DiscountWindowWrapper = styled.div`
  width: 30%;
  max-width: 1400px;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 900px) {
    width: 100%;
  }
  
`;

export const OrderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
`;

export const OrderDetails = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 15px;
`;

export const OrderQuanity = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

export const OrderData = styled.div`
  margin-left: 10px;
`;

export const OrderName = styled.div`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
  margin-right: 15px;
`;

export const OrderScentCrop = styled.div`
  font-size: 16px;
`;

export const UploadedPhotoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const UploadedPhotoText = styled.div`
  font-size: 20px;
  font-weight: lighter;
  margin-top: 15px;
`;

export const UploadedPhotoMock = styled.div`
  width: 80%;
  height: 100%;
  background-color: wheat;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 40%;
    min-height: 200px;
  }
`;

export const DiscountInput = styled.input`
  box-sizing: border-box;
  width: 60%;
  padding: 20px 10px 20px 10px;
  font-size: 22px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 10px;

  &::placeholder {
    color: #5e5e5e;
  }
`;

export const ApplyButton = styled.button`
  background-color: #42b925;
  color: white;
  font-size: 22px;
  font-weight: bolder;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const DiscountsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const DiscountShippingWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Shipping = styled.div`
  font-weight: bolder;
`;

export const ShippingDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShippingDetails = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  font-weight: lighter;
  font-size: 16px;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 20px;
  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
`;

export const TotalText = styled.div`
  font-size: 20px;
`;

export const PriceText = styled.div`
  font-size: 22px;
`;
