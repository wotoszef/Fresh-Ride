import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Dispatch, useRef, useState } from "react";
import {
  FormContainer,
  TextContainer,
  TooltipLabel,
} from "./FormSelect.style";
import { FormProps } from "../../lib/formValues";
import { FieldValues, UseFormRegister } from "react-hook-form";
import PhotoUpload from "../photo-upload/PhotoUpload";
import PhotoGuidelinesModal from "../photo-guidelines-modal/PhotoGuidelinesModal";

interface FormSelectProps {
  title: string;
  tooltipText?: string;
  selectLabel: string;
  selectValues?: FormProps[];
  uploadPhoto?: boolean;
  register: UseFormRegister<FieldValues>;
  setPhotoUrl?: Dispatch<string | undefined>;
}

const FormSelect = ({
  title,
  tooltipText,
  selectLabel,
  selectValues,
  uploadPhoto,
  register,
  setPhotoUrl,
}: FormSelectProps) => {
  const hiddenFileInput = useRef(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <FormContainer>
      <TextContainer>
        <div>{title}</div>
        {uploadPhoto && (
          <TooltipLabel onClick={handleClose}>{tooltipText}</TooltipLabel>
        )}
      </TextContainer>
      <Box>
        {!uploadPhoto && selectValues.length > 0 ? (
          <FormControl fullWidth>
            <InputLabel>{selectLabel}</InputLabel>
            <Select
              label={selectLabel}
              sx={{ backgroundColor: "white" }}
              {...register(title.toLowerCase())}
            >
              {selectValues.map((selectValue) => (
                <MenuItem value={selectValue.value}>
                  {selectValue.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <PhotoUpload setPhotoUrl={setPhotoUrl}/>
        )}
      </Box>
      <PhotoGuidelinesModal open={open} handleClose={handleClose} />
    </FormContainer>
  );
};

export default FormSelect;
