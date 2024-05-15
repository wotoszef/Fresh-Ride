import {
  FooterLogo,
  FooterWrapper,
  LogoWithMediaWrapper,
  MediaWrapper,
  PolicyItem,
  PolicyWrapper,
  SocialIcons,
} from "./Footer.style";
import tiktok from "../../assets/pictures/tiktok.png";
import instagram from "../../assets/pictures/instagram.png";
import facebook from "../../assets/pictures/facebook.png";

const Footer = () => {
  const instagramLink = "https://www.instagram.com/freshridepl/";
  const tiktokLink = "https://www.tiktok.com/@freshridepl";
  return (
    <FooterWrapper>
      <PolicyWrapper>
        <PolicyItem>Regulamin sklepu</PolicyItem>
        <PolicyItem>Polityka prywatności</PolicyItem>
        <PolicyItem>Regulamin usługi</PolicyItem>
      </PolicyWrapper>
      <LogoWithMediaWrapper>
        <MediaWrapper>
          <SocialIcons
            onClick={() =>
              window.open(instagramLink, "_blank", "rel=noopener noreferrer")
            }
            src={instagram}
            alt="Instagram"
          />
          <SocialIcons
            onClick={() =>
              window.open(tiktokLink, "_blank", "rel=noopener noreferrer")
            }
            src={tiktok}
            alt="TikTok"
          />
          <SocialIcons src={facebook} alt="Facebook" />
        </MediaWrapper>
        <FooterLogo>FRESH RIDE</FooterLogo>
      </LogoWithMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
