import "./Footer.css";
import logoPartido from "../../assets/LOGOS/ICONO_FUERZA.webp";
import facebookIcon from "../../assets/icons/icons8-facebook.svg";
import instagramIcon from "../../assets/icons/icons8-instagram-100.svg";
import messageIcon from "../../assets/icons/emailIcon.svg";

export function Footer({ handlerChange }) {
  return (
    <footer>
      <section>
        <article className="footerLogoContainer">
          <img src={logoPartido} alt="" />
          <p className="separatorFooter"></p>
        </article>
      </section>
      <section>
        <article>
          <a href="https://www.instagram.com/juansinningc/" target="_blank" className="socialMediaLinks">
            <img src={instagramIcon} alt="" />
            <p className="footerComplementDataLink">@juansinningc</p>
          </a>
          <p className="separatorFooter"></p>
          <a href="https://www.facebook.com/juan.ciodaro" target="_blank" className="socialMediaLinks">
            <img src={facebookIcon} alt="" />
            <p className="footerComplementDataLink">
              Juan Nicolás <br /> Sinning Ciodaro
            </p>
          </a>
          <p className="separatorFooter"></p>
        </article>
      </section>
      <section>
        <article>
          <button type="button" onClick={handlerChange}>
            <img src={messageIcon} alt="" />
            ¡Escribe esta nueva <br />
            historia conmigo¡
          </button>
        </article>
      </section>
    </footer>
  );
}
