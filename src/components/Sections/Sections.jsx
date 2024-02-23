import "./Sections.css";
import fondoImage from "../../assets/LOGOS/FOTO.webp";
import { Carousel } from "react-responsive-carousel";

function showAnimationEnter(entrie) {
  let [element] = entrie;
  if (element?.isIntersecting) {
    document
      .getElementById("SectionHomeImage")
      ?.classList.add("SectionContainerAnimated");
    document
      .getElementById("SectionHomeCarousel")
      ?.classList.add("SectionContainerAnimatedDelay");
  } /* else {
    document
      .getElementById("SectionHomeImage")
      ?.classList.remove("SectionContainerAnimated");
    document
      .getElementById("SectionHomeCarousel")
      ?.classList.remove("SectionContainerAnimatedDelay");
  } */
}

export function Sections({isAMovil}) {
  let options = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  setTimeout(() => {
    let observer = new IntersectionObserver(showAnimationEnter, options);
    let elementToObserve = document.getElementById("SectionHomeContainer");
    if (elementToObserve) observer?.observe(elementToObserve);
  }, 1000);

  return (
    <article className="SectionContainer" id="SectionHomeContainer">
      <div>
        <img src={fondoImage} alt="" id="SectionHomeImage" />
      </div>
      <div>
        <div className="CarouselContainer" id="SectionHomeCarousel">
          <div>
            <Carousel
              showThumbs={false}
              showArrows={!isAMovil }
              showStatus={false}
              className="mainSectionCarousel"
            >
              <p className="textColorWhite longTextCarousel">
                Mi nombre es 
                <strong className="textColorPurple ">
                   Juan Nicolás Sinning Ciodaro
                </strong>
                , y quiero ser el próximo
                <strong> Alcalde del Distrito de Mompox</strong>, para seguirle
                sirviendo a mi gente y aportar procesos de transformación que
                hemos venido añorando hace varios años.
              </p>
              <p className="textColorWhite largelongTextCarousel">
                Nací en Mompox, en el antiguo Hospital San Juan de Dios, el 14
                de febrero de 1994 fruto de la unión de Paulina Ciodaro y Daniel
                Sinning. Soy el menor de tres hermanos, crecí en el callejón de
                Don Blas, entre amigos, el Estadio Titán y las inolvidables
                tardes donde Angelita. Recientemente me casé con el amor de mi
                vida, Melisa, quien está esperando a la persona con la que todos
                los días sueño conocer, mi hija Leticia.
              </p>
              <p className="textColorWhite longTextCarousel">
                Amante del deporte, de la lectura, del campo colombiano y con
                gran vocación de servicio al prójimo; aspiro llegar a la
                Alcaldía Distrital de Mompox, con el propósito de que juntos
                construyamos “Una Nueva Historia”.
              </p>
            </Carousel>
          </div>
        </div>
      </div>
    </article>
  );
}
