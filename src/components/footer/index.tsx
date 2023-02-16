import * as C from "./styles";
import Logo from "../../images/logo.svg";
import LogoFacebook from "../../images/icon-facebook.svg";
import LogoInstagram from "../../images/icon-instagram.svg";
import LogoPinterest from "../../images/icon-pinterest.svg";
import LogoTwitter from "../../images/icon-twitter.svg";



export const Footer = () => {
  return (
    <C.Container>
      <C.SocialLinks>
        <img className="Logo" src={Logo} alt="Sunnyside Logo" />
        <div className="linklist">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
        </div>
        <div className="iconslinks">
        <img src={LogoFacebook} alt="Facebook logo" />
        <img src={LogoInstagram} alt="Instagram Logo" />
        <img src={LogoPinterest} alt="Pinterest Logo" />
        <img src={LogoTwitter} alt="Twitter Logo" />
        </div>
      </C.SocialLinks>
      Challenge by Frontend Mentor. Coded by Leonardo Brancaglione.
    </C.Container>
  );
};


