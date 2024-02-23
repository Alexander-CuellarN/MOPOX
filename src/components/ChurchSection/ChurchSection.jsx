import "./ChurchSection.css";
import { Carousel } from "react-responsive-carousel";
import fondoImage from "../../assets/FONDOS/IGLESIA.webp";
export function ChurchSection({isAMovil}) {
  return (
    <article className="ChurchSectionContainer">
      <div className="SectionChurchContent">
        <div className="SectionChurchCarousel">
          <Carousel
            showThumbs={false}
            showArrows={!isAMovil}
            showIndicators={isAMovil}
            showStatus={false}
            className="ChurchCarousel"
          >
            <p className="FontBig">
              <strong className="FontBlue">
                Queridos amigos y amigas de Mompox
              </strong>
              , Permítanme dirigirme a cada uno de ustedes con profundo cariño y
              emoción… <br /> Soy Juan Nicolás Sinning Ciodaro, un orgulloso
              hijo de esta tierra, quien ha tenido el privilegio de crecer en
              medio de las calles coloniales y la historia valerosa de nuestro
              amado distrito. Hoy, con el corazón lleno de anhelos y sueños, les
              escribo esta carta para compartirles mi pasión y mi compromiso
              inquebrantable de trabajo buscando siempre el desarrollo de mi
              amado Mompox.
            </p>
            <p className="FontBig">
              Hace algunos años, partí de nuestro querido terruño con el
              propósito de estudiar leyes y políticas públicas en la ciudad de
              Bogotá. Fue una experiencia enriquecedora, llena de conocimientos
              y oportunidades, pero, siempre tuve claro que mi objetivo final
              era regresar a Mompox y poner en práctica todo lo aprendido para
              contribuir a su transformación.
            </p>
            <p className="FontBig">
              Mi retorno a Mompox fue una decisión personal y junto a mi esposa,
              quien comparte mi compromiso y deseo de servir, nos instalamos
              aquí con la firme convicción que en equipo, podemos aportar para
              forjar un futuro brillante para las generaciones presentes y
              venideras, incluyendo a mi hija, quien está a punto de nacer.
            </p>
          </Carousel>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${fondoImage})` }}
        className="fondImageSectionChurch"
      />
    </article>
  );
}
