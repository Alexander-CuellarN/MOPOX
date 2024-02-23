import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/Footer";
import { PointsVision } from "../../components/PointsVision/PointsVision";
import { POINTS_VISION } from "../../services/mocks/data";

import "../MompoxMeMotiva/MompoxMeMotiva.css";
import "./Vision.css";

import pdfImg from "../../assets/LOGOS/ICONO_PDF.webp";
import filePDF from "../../assets/pdfs/PROGRAMA_DE_GOBIERNO.pdf";

export function Vision({ handlerChange, isAMovil }) {
  if (isAMovil) {
    POINTS_VISION.sort((a, b) => a.number - b.number);
  }
  return (
    <main className="pagesContainer">
      <Header subMenu={2} />
      <section className="pagesSections VisionContainer">
        <article>
          <div className="VisionText">
            <p>
              <strong>Debemos pasar la política a otra esfera,</strong>que no
              sea personal, sino de ideas. Quiero construir una política a
              futuro, en donde
              <strong>
                la juventud es protagonista y todos los momposinos
              </strong>
              puedan traer ideas innovadoras para la recuperación social de
              nuestro territorio. Es el momento que trabajemos en equipo entre
              la comunidad y la administración para escribir una Nueva Historia.
            </p>
          </div>
        </article>
        <article className="VisionPoints">
          <div>Ejes temáticos</div>
          <div>
            {POINTS_VISION.map((item, index) => (
              <PointsVision
                key={index}
                numberContent={item.number}
                textContent={item.content}
                animationDuration={index}
              />
            ))}
            <div className="pdfDownloadContainer">
              <div className="visionPdfdownload">
                <a href={filePDF} download="PROGRAMA_DE_GOBIERNO.pdf">
                  <img src={pdfImg} />
                  <p>DESCARGA PLAN DE GOBIERNO 2024-2027</p>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>
          <video className="VisionVideo" autoPlay controls>
            <source src="podcast_potencial.mp4" type="video/mp4" />
          </video>
        </article>
      </section>
      <Footer handlerChange={handlerChange} />
    </main>
  );
}
