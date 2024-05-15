import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContactContentWrapper = styled.div`
  width: 75%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 140px;
  @media (min-width: 1300px) {
    height: 100vh;
    margin-bottom: 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContactTitle = styled.div`
  font-size: 80px;
  font-family: sans-serif;
  font-weight: bolder;
  margin-top: 48px;
  @media (max-width: 700px) {
    font-size: 60px;
    text-align: center;
  }
`;

export const ContactContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
`;

export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ContactImage = styled.img`
  max-width: 80%;
`;

export const ContactForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 120px;
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 10px;
  padding: 18px;
  font-size: 16px;
  box-sizing: border-box;
  margin: 10px 0;
  cursor: pointer;
  "&:placeholder": {
    color: rgba(0, 0, 0, 0.33);
  }
`;

export const ContactArea = styled.textarea`
  width: 100%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 10px;
  padding: 18px;
  font-size: 16px;
  max-height: 90px;
  resize: none;
  box-sizing: border-box;
  margin: 10px 0;
  cursor: pointer;
  "&:placeholder": {
    color: rgba(0, 0, 0, 0.33);
  }
`;

export const ContactButton = styled.button`
  font-size: 16px;
  padding: 18px;
  border: none;
  background-color: #42b925;
  color: white;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
`;
