import {
  StyledFileInput,
  StyledFileInputText,
  StyledFileInputWrapper,
  UploadButton,
  UploadPhotoInput,
} from "../form-select/FormSelect.style";
import { Dispatch, useState } from "react";
import { Modal } from "@mui/material";
import {
  PhotoUploadButton,
  PhotoUploadModalWrapper,
  PhotoUploadTitle,
} from "./PhotoUpload.style";
import AWS from "aws-sdk";
import S3 from "aws-sdk/clients/s3";

interface IPhotoUpload {
  setPhotoUrl?: Dispatch<string | undefined>;
}

const PhotoUpload = ({ setPhotoUrl }: IPhotoUpload) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "video/mp4",
    "video/quicktime",
    "audio/mpeg",
    "audio/wav",
    // Add more supported types as needed
  ];
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      alert("Invalid file type. Only images and PDFs are allowed.");
    }
  };
  const uploadFile = async () => {
    setUploading(true);
    const S3_BUCKET = "air-freshener-images"; // Replace with your bucket name
    const REGION = "eu-north-1"; // Replace with your region

    AWS.config.update({
      accessKeyId: "AKIAZQ3DUBGOOSLTFGGH",
      secretAccessKey: "DTVXUsp1OqAWS9H1ZJBNN3JIjoyUftlUAYBYiI33",
    });

    const s3 = new S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    const getParams = {
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    try {
      const upload = await s3.putObject(params).promise();
      console.log(upload, "upload");
      setUploading(false);
      alert("File uploaded successfully.");
      setOpen(false);
      const get = await s3.getSignedUrlPromise("getObject", getParams);
      setPhotoUrl(get);
    } catch (error) {
      console.error(error);
      setUploading(false);
      alert("Error uploading file: " + error.message); // Inform user about the error
    }
  };
  return (
    <UploadPhotoInput>
      <UploadButton onClick={handleClick}>Prześlij zdjęcie</UploadButton>
      <Modal open={open} onClose={handleClick}>
        <PhotoUploadModalWrapper>
          <PhotoUploadTitle>
            Kliknij zaznaczony obszar aby przesłać swoje zdjęcie
          </PhotoUploadTitle>
          {file ? (
            <StyledFileInputWrapper>
              <StyledFileInputText>
                Przesłałeś swoje zdjęcie teraz wyślij je nam!
              </StyledFileInputText>
            </StyledFileInputWrapper>
          ) : (
            <StyledFileInputWrapper>
              <StyledFileInputText>
                Kliknij tutaj aby przesłać swoje zdjęcie
              </StyledFileInputText>
              <StyledFileInput onChange={handleFileChange} />
            </StyledFileInputWrapper>
          )}
          <PhotoUploadButton onClick={uploadFile}>Upload</PhotoUploadButton>
        </PhotoUploadModalWrapper>
      </Modal>
    </UploadPhotoInput>
  );
};

export default PhotoUpload;
