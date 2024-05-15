import {
  ContactArea,
  ContactButton,
  ContactContent,
  ContactContentWrapper,
  ContactForm,
  ContactImage,
  ContactInput,
  ContactTitle,
  ContactWrapper,
  ImageWrapper,
} from "./Contact.style";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import EmailIcon from "../../assets/pictures/email-icon.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_1sueoo1",
        "template_fd7yf3g",
        e.target,
        "2pUxnY-b2I3NkDzil",
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <ContactWrapper>
      <ContactContentWrapper>
        <Navigation />
        <ContactTitle>Masz jakieś pytanie?</ContactTitle>
        <ContactContent>
          <ImageWrapper>
            <ContactImage src={EmailIcon} alt="E-mail" />
          </ImageWrapper>
          <ContactForm onSubmit={sendEmail}>
            <ContactInput name="user_name" type={"text"} placeholder={"Imię"} />
            <ContactInput type={"text"} placeholder={"Nazwisko"} />
            <ContactInput
              name="user_email"
              type={"email"}
              placeholder={"E-mail"}
            />
            <ContactArea name="message" placeholder={"Twoje pytanie"} />
            <ContactButton type={"submit"} disabled={isSubmitting}>
              Wyślij
            </ContactButton>
          </ContactForm>
        </ContactContent>
        {stateMessage && <div>{stateMessage}</div>}
      </ContactContentWrapper>
      <Footer />
    </ContactWrapper>
  );
};

export default Contact;
