import { NavElement, NavWrapper } from "./Navigation.style";
import Contact from "./contact-section/Contact";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <NavWrapper>
      <NavElement />
      <NavElement style={{ cursor: "pointer" }} onClick={onClick}>
        FRESH RIDE
      </NavElement>
      <Contact />
    </NavWrapper>
  );
};

export default Navigation;
