import { ContactElement, ContactWrapper } from "./Contact.style";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <ContactWrapper>
      <ContactElement onClick={() => navigate("/about")}>O nas</ContactElement>
      <ContactElement onClick={() => navigate("/contact")}>
        Kontakt
      </ContactElement>
    </ContactWrapper>
  );
};

export default Contact;
