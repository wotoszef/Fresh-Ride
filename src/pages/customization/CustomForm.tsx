import Navigation from "../../components/navigation/Navigation";
import DetailsForm from "../../components/details-form/DetailsForm";
import { CustomFormContainer, CustomFormWrapper } from "./CustomForm.style";
import Footer from "../../components/footer/Footer";

const CustomForm = () => {
  return (
    <CustomFormContainer>
      <CustomFormWrapper>
        <Navigation />
        <DetailsForm />
      </CustomFormWrapper>
      <Footer />
    </CustomFormContainer>
  );
};

export default CustomForm;
