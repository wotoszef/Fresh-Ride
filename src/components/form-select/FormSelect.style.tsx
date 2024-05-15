import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    min-width: 0px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const TooltipLabel = styled.div`
  color: #929292;
  text-decoration: underline;
  cursor: pointer;
`;

export const GuidelinesModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GuidelinesText = styled.div`
  background-color: white;
  padding: 20px;
  width: 70%;
  border-radius: 5px;
`;

export const GuidelinesTitle = styled.span`
  font-weight: bolder;
`;

export const MainTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
  margin: 10px 0;
`;

export const MainTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CloseButton = styled.div`
  font-size: 22px;
  font-weight: bolder;
  cursor: pointer;
`;

export const StyledFileInputWrapper = styled.div`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  width: 100%;
  height: 80%;
`;

export const StyledFileInputText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  width: 80%;
  text-align: center;
`;

export const StyledFileInput = styled.input.attrs({
  type: "file",
})`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const UploadButton = styled.div`
  /* Style for the upload button */
  background-color: white;
  color: rgba(0, 0, 0, 0.55);
  padding: 16px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.27);
  cursor: pointer;
  text-align: left;
`;

export const UploadPhotoInput = styled.label`
  /* Style for the file input wrapper */
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const UploadWrapper = styled.div`
  width: 100%;
`;
