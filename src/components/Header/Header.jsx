import "./Header.css";
import { Link } from "react-router-dom";

  import homeIcon from "../../assets/vectores/casa_vector.png";
import linesIcon from "../../assets/vectores/menu.svg";
import menuPhone from "../../assets/vectores/menuPhone.svg";


export function Header({ fixed = false, subMenu, subMenuOption }) {
  return (
    <header style={fixed ? { position: "fixed" } : {}}>
      <section>
        <nav>
          <div className="iconsMenu">
            <Link to="/">
              <img src={homeIcon} alt="" />
            </Link>
          </div>

          <div
            className={
              subMenu === 1
                ? "itemNavBar iconsMenu ItemMenuActivated"
                : "itemNavBar iconsMenu"
            }
            id="bio"
          >
            <img src={linesIcon} alt="" />
            <div className="textNavbar">Biografía</div>
            <div
              className={
                subMenu === 1
                  ? "subMenu subMenu1 subMenuActivated"
                  : "subMenu subMenu1"
              }
            >
              <ul>
                <Link
                  to="/MisLogros"
                  className={subMenuOption === 1 ? "active" : ""}
                >
                  Mis logros
                </Link>
                <Link
                  to="/MompoxMeMotiva"
                  className={subMenuOption === 2 ? "active" : ""}
                >
                  Mompox <br />
                  me motiva
                </Link>
                <Link
                  to="/Proposito"
                  className={subMenuOption === 3 ? "active" : ""}
                >
                  Un alcalde <br />
                  con propósito
                </Link>
              </ul>
            </div>
          </div>

          <div
            className={
              subMenu === 2
                ? "itemNavBar iconsMenu ItemMenuActivated"
                : "itemNavBar iconsMenu"
            }
            id="proposals"
          >
            <Link to={"/Vision"} className="textNavbar">
              Visión y propuestas
            </Link>
          </div>
          <div
            className={
              subMenu === 3
                ? "itemNavBar iconsMenu ItemMenuActivated"
                : "itemNavBar iconsMenu"
            }
            id="volunteers"
          >
            <Link to={"/Testimonios"} className="textNavbar">
              Testimonios, apoyos y/o voluntariados
            </Link>
          </div>
        </nav>
        <nav className="phoneMenu">
          <div>
            <div className="iconsMenu">
              <Link to="/">
                <img src={homeIcon} alt="" className="iconsMainSections"/>
              </Link>
              <label htmlFor="checkMenuActivate">
                <img src={linesIcon} alt="" className="iconsMainSections" />
              </label>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkMenuActivate"
              className="checkMenuActivate"
            />
            <div className="fullMenuShow">
              <div
                className={
                  subMenu === 1
                    ? "itemNavBar ItemMenuActivated"
                    : "itemNavBar "
                }
                id="bio"
              >
                <label htmlFor="showSubMenuPhone" className="showSubMenuPhone">
                <img src={menuPhone} alt="" />
                <div className="textNavbar">Biografía</div>
                </label>
                <input type="checkbox" name="" id="showSubMenuPhone" />
                <div
                  className={
                    subMenu === 1
                      ? "subMenu  subMenuActivated"
                      : "subMenu "
                  }
                >
                  <ul>
                    <Link
                      to="/MisLogros"
                      className={subMenuOption === 1 ? "active" : ""}
                    >
                      Mis logros
                    </Link>
                    <Link
                      to="/MompoxMeMotiva"
                      className={subMenuOption === 2 ? "active" : ""}
                    >
                      Mompox me motiva
                    </Link>
                    <Link
                      to="/Proposito"
                      className={subMenuOption === 3 ? "active" : ""}
                    >
                      Un alcalde con propósito
                    </Link>
                  </ul>
                </div>
              </div>

              <div
                className={
                  subMenu === 2
                    ? "itemNavBar  ItemMenuActivated"
                    : "itemNavBar "
                }
                id="proposals"
              >
                <Link to={"/Vision"} className="textNavbar">
                  Visión y propuestas
                </Link>
              </div>
              <div
                className={
                  subMenu === 3
                    ? "itemNavBar  ItemMenuActivated"
                    : "itemNavBar "
                }
                id="volunteers"
              >
                <Link to={"/Testimonios"} className="textNavbar">
                  Testimonios, apoyos y/o voluntariados
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="Logos">
        <article>
          {/* <img src={logoPage} alt="Logo" className="logo" /> */}
        </article>
        <article>
          {/* <img src={logoPage} alt="Logo" className="logo" /> */}
        </article>
      </section>
    </header>
  );
}
