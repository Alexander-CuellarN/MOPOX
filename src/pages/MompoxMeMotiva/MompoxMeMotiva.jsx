import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/Footer";
import { ChurchSection } from "../../components/ChurchSection/ChurchSection";

import "./MompoxMeMotiva.css";

export function MompoxMeMotiva({ handlerChange, isAMovil }) {
  console.log(isAMovil);
  return (
    <main className="pagesContainer">
      <Header subMenu={1} subMenuOption={2} />
      <section className="pagesSections">
        <ChurchSection isAMovil={isAMovil} />
      </section>
      <Footer handlerChange={handlerChange} />
    </main>
  );
}
