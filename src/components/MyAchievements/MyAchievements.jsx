import "./myAchievements.css";
import { Carousel } from "react-responsive-carousel";
import fondoImage from "../../assets/FONDOS/FOTO_3.webp";
export function MyAchievements() {
  return (
    <article className="myAchievementsSectionContainer">
      <div className="SectionmyAchievementsContent">
        <div className="SectionmyAchievementsCarousel">
          <div>
            <p className="FontBig">
              Soy egresado del Colegio Sagrado Corazón de Jesús de Mompox,
              abogado de la Universidad Sergio Arboleda, con posgrados en las
              disciplinas de Derecho Tributario y de Políticas Públicas, títulos
              conferidos por la Universidad Externado de Colombia y la
              Universidad de los Andes, respectivamente. Tengo experiencia
              laboral de más de 6 años desempeñados como Asesor Jurídico en la
              Dirección de Impuestos y Aduanas Nacionales – DIAN, la firma de
              abogados Brigard Urrutia, entre otros.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${fondoImage})` }}
        className="fondImageSectionmyAchievements"
      />
    </article>
  );
}
