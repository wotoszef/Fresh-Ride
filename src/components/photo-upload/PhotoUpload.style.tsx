import styled from "styled-components";

export const PhotoUploadModalWrapper = styled.div`
  width: 60%;
  height: 80%;
  border-radius: 10px;
  padding: 60px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PhotoUploadTitle = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 24px;
`;

export const PhotoUploadButton = styled.button`
  font-size: 18px;
  color: white;
  background-color: #42b925;
  border: none;
  border-radius: 10px;
  padding: 20px 50px;
  margin-top: 24px;
`;
