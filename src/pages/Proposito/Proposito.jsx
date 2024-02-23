import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/Footer";

import "../MompoxMeMotiva/MompoxMeMotiva.css";
import { PurposeSection } from "../../components/purposeSection/PurposeSection";

export function Proposito({ handlerChange, isAMovil }) {
  return (
    <main className="pagesContainer">
      <Header subMenu={1} subMenuOption={3} />
      <section className="pagesSections">
        <PurposeSection isAMovil={isAMovil} />
      </section>
      <Footer handlerChange={handlerChange} />
    </main>
  );
}
