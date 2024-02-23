import "./PurposeSection.css";
import { Carousel } from "react-responsive-carousel";
import fondoImage from "../../assets/FONDOS/FOTO_4.webp"
export function PurposeSection({isAMovil}) {

  return (
    <article className="purposeSectionContainer">
      <div className="SectionpurposeContent">
        <div className="SectionpurposeCarousel">
          <Carousel
            showThumbs={false}
            showArrows={!isAMovil}
            showIndicators={isAMovil}
            showStatus={false}
            className="purposeCarousel"
          >
            <p className="FontBig">
              <span className="FontPurple">Queridos amigos y amigas</span>,
              conozco las dificultades que enfrentamos, he sido testigo de
              ellas, he recorrido todos los barrios y corregimientos de nuestro
              distrito; sé que nuestras oportunidades educativas y laborales han
              sido limitadas; entiendo la lucha constante por acceder a
              servicios básicos de calidad, y el desafío de preservar nuestra
              identidad cultural dentro de un mundo en constante evolución y
              cambio. Quiero que sepan que emprendí este camino,{" "}
              <span className="FontPurple">
                {" "}
                para trabajar incansablemente en la construcción de una Mompox
                próspera y justa para todos.{" "}
              </span>
            </p>
            <p className="FontBig">
              Mi formación académica y experiencia como abogado y especialista
              en políticas públicas, me ha preparado para enfrentar los desafíos
              que experimentamos como momposinos. Pero lo más importante, es que
              he aprendido que la verdadera transformación solo es posible si
              contamos con la participación activa de toda la comunidad. Por
              eso, los invito a que juntos emprendamos este viaje hacia un
              futuro lleno de esperanza y oportunidades.
            </p>
            <p className="FontBig">
              Construiremos un Mompox donde la educación sea una herramienta
              poderosa de cambio, donde nuestros jóvenes tengan acceso a
              oportunidades y puedan desarrollar sus talentos y sueños.
              Trabajaremos para fomentar el emprendimiento local y fortalecer el
              sector agropecuario, valorizando nuestras tradiciones y
              promoviendo prácticas sostenibles que impulsen el desarrollo
              económico y social.
            </p>
            <p className="FontBig">
              No solo nos enfocaremos en mejorar nuestros servicios básicos,
              sino también en proteger nuestro patrimonio y en promover un
              turismo responsable y sostenible que resalte nuestra riqueza
              cultural y natural, donde los visitantes puedan sumergirse en
              nuestra historia, admirar el arte y las artesanías locales,
              disfrutar de nuestra gastronomía y de la calidez y hospitalidad de
              nuestra gente.
            </p>
            <p className="FontBig">
              Nuestro compromiso no se limitará a lo material; trabajaremos
              incansablemente para construir una sociedad inclusiva, donde cada
              persona, sin importar su edad, género o condición social, sea
              valorada y respetada. Implementaremos programas de apoyo y
              atención integral para nuestros niños, jóvenes, adultos y personas
              mayores, promoviendo la cultura ciudadana y la participación
              activa de todos en la toma de decisiones para la construcción de
              nuestro futuro común.
            </p>
            <p className="FontBig">
              Queridas momposinas y momposinos, el camino no será fácil, pero
              estoy seguro que juntos podemos superar cualquier desafío. Mi
              equipo de trabajo estará compuesto por personas comprometidas y
              capacitadas, pero necesitamos de su participación activa y su
              participación activa y sus valiosas ideas, para hacer realidad
              este sueño.
            </p>
            <p className="FontBig">
              Contaremos con un gobierno transparente, responsable y cercano a
              ustedes, donde sus voces sean escuchadas y sus necesidades sean
              atendidas. Quiero su voto de confianza. Es el momento de dejar
              atrás la resignación y la apatía, y de unirnos en un esfuerzo
              colectivo para construir un Mompox lleno de oportunidades y
              esperanza.
            </p>
          </Carousel>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${fondoImage})` }}
        className="fondImageSectionpurpose"
      >
        <div></div>
      </div>
    </article>
  );
}
