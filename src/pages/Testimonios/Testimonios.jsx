import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/Footer";

import "../MompoxMeMotiva/MompoxMeMotiva.css";
import { TestimonySection } from "../../components/testimonySection/testimonySection";

export function Testimonios({ handlerChange, isAMovil }) {
  return (
    <main className="pagesContainer">
      <Header subMenu={3} />
      <section className="pagesSections">
        <TestimonySection isAMovil={isAMovil} />
      </section>
      <Footer handlerChange={handlerChange} />
    </main>
  );
}
