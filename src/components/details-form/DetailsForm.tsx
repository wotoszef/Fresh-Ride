import {
  ButtonContainer,
  CustomizeButton,
  DetailsFormContainer,
  Form,
  FormImage,
  FreshenerPreview,
  InputsContainer,
  PriceInfo,
  PriceText,
  ShippingDetails,
} from "./DetailsForm.style";
import FormSelect from "../form-select/FormSelect";
import { Crops, Scents } from "../../lib/formValues";
import { useForm } from "react-hook-form";
import { FormContainer, TextContainer } from "../form-select/FormSelect.style";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import carFreshener from "../../assets/pictures/carfreshener.jpg";

const DetailsForm = () => {
  const { register, handleSubmit } = useForm();
  const [photoUrl, setPhotoUrl] = useState(undefined);

  const onSubmit = (data) => {
    const formData = { ...data, photoUrl };
    console.log(formData, "FORM DATA");
  };
  return (
    <DetailsFormContainer>
      <FreshenerPreview>
        <FormImage src={carFreshener} />
        <ShippingDetails>
          Przybliżona data dostarczenia: Maj 8 - Maj 10
        </ShippingDetails>
      </FreshenerPreview>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <PriceInfo>
          <PriceText>Custom fresh ride</PriceText>
          <PriceText>$11.99</PriceText>
        </PriceInfo>
        <InputsContainer>
          <FormContainer>
            <TextContainer>
              <div>Zapach</div>
            </TextContainer>
            <Box>
              <FormControl fullWidth>
                <InputLabel>Wybierz zapach</InputLabel>
                <Select
                  label={"Wybierz zapach"}
                  sx={{ backgroundColor: "white" }}
                  {...register("Scent".toLowerCase())}
                >
                  {Scents.map((selectValue) => (
                    <MenuItem value={selectValue.value}>
                      {selectValue.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </FormContainer>
          <FormSelect
            title={"Przycięcie"}
            selectLabel={"Wybierz przycięcie"}
            selectValues={Crops}
            register={register}
          />
          <FormSelect
            title={"Przesyłamy twoje zdjęcie"}
            tooltipText={"Zobacz wytyczne"}
            selectLabel={"Prześlij swoje zdjęcie"}
            uploadPhoto
            register={register}
            setPhotoUrl={setPhotoUrl}
          />
        </InputsContainer>
        <ButtonContainer>
          <CustomizeButton type={"submit"} onSubmit={handleSubmit(onSubmit)}>
            CUSTOMIZE IT!
          </CustomizeButton>
        </ButtonContainer>
      </Form>
    </DetailsFormContainer>
  );
};

export default DetailsForm;
