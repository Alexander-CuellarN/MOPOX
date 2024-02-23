import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/Footer";
import { Sections } from "../../components/Sections/Sections";
import "./Home.css";

export function Home({ handlerChange, isAMovil }) {
  return (
    <main className="homeContainer" id="homeContainer">
      <Header fixed={true} />
      <section className="homeSections">
        <article>
          <video controls autoPlay className="homeVideo">
            <source src="Spot_publicitario.MP4" type="video/mp4" />
          </video>
        </article>
        <Sections isAMovil={isAMovil} />
      </section>
      <Footer handlerChange={handlerChange} />
    </main>
  );
}
