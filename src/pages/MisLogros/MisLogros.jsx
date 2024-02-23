import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/Footer";
import "./MisLogros.css";
import { MyAchievements } from "../../components/MyAchievements/MyAchievements";

export function MisLogros({ handlerChange }) {
  return (
    <main className="myAchievementsContainer">
      <Header subMenu={1} subMenuOption={1} />
      <section className="myAchievementsSections">
        <MyAchievements />
      </section>
      <Footer handlerChange={handlerChange} />
    </main>
  );
}
