import "./TestimonySection.css";
import { Carousel } from "react-responsive-carousel";

import imageCarousel1 from "../../assets/carousel_Images/testimonyCarousel/FOTO_1.webp";
import imageCarousel2 from "../../assets/carousel_Images/testimonyCarousel/FOTO_2.webp";
import imageCarousel3 from "../../assets/carousel_Images/testimonyCarousel/FOTO_3.webp";
import imageCarousel4 from "../../assets/carousel_Images/testimonyCarousel/FOTO_4.webp";
import imageCarousel5 from "../../assets/carousel_Images/testimonyCarousel/FOTO_5.webp";
import imageCarousel6 from "../../assets/carousel_Images/testimonyCarousel/FOTO_6.webp";
import imageCarousel7 from "../../assets/carousel_Images/testimonyCarousel/FOTO_7.webp";
import imageCarousel8 from "../../assets/carousel_Images/testimonyCarousel/FOTO_8.webp";
import imageCarousel9 from "../../assets/carousel_Images/testimonyCarousel/FOTO_9.webp";

import imageSubCarousel1 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0002.webp";
import imageSubCarousel2 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0003.webp";
import imageSubCarousel3 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0004.webp";
import imageSubCarousel4 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0005.webp";
import imageSubCarousel5 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0006.webp";
import imageSubCarousel6 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0007.webp";
import imageSubCarousel7 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0008.webp";
import imageSubCarousel8 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0009.webp";
import imageSubCarousel9 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0010.webp";
import imageSubCarousel10 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0011.webp";
import imageSubCarousel11 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0012.webp";
import imageSubCarousel12 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0013.webp";
import imageSubCarousel13 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0014.webp";
import imageSubCarousel14 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0015.webp";
import imageSubCarousel15 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0016.webp";
import imageSubCarousel16 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0017.webp";
import imageSubCarousel17 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0019.webp";
import imageSubCarousel18 from "../../assets/carousel_Images/testimonySubCarousel/IMG-20230906-WA0022.webp";

const TESTIMONY_SUB_CAROUSEL = [
  imageSubCarousel1,
  imageSubCarousel2,
  imageSubCarousel3,
  imageSubCarousel4,
  imageSubCarousel5,
  imageSubCarousel6,
  imageSubCarousel7,
  imageSubCarousel8,
  imageSubCarousel9,
  imageSubCarousel10,
  imageSubCarousel11,
  imageSubCarousel12,
  imageSubCarousel13,
  imageSubCarousel14,
  imageSubCarousel15,
  imageSubCarousel16,
  imageSubCarousel17,
  imageSubCarousel18,
];

const TESTIMONY_CAROUSEL = [
  imageCarousel1,
  imageCarousel2,
  imageCarousel3,
  imageCarousel4,
  imageCarousel5,
  imageCarousel6,
  imageCarousel7,
  imageCarousel8,
  imageCarousel9,
];

function renderImages(item, class_, isAMovil) {
  let counter = 0;
  let images = [];
  while (counter < item.length) {
    if (!isAMovil) {
      images.push(
        <div className={class_} key={counter}>
          <img src={item[counter]} alt="" />
          <img src={item[counter + 1]} alt="" />
          <img src={item[counter + 2]} alt="" />
        </div>
      );
      counter = counter + 3;
    } else {
      images.push(
        <div className={class_} key={counter}>
          <img src={item[counter]} alt="" />
        </div>
      );
      counter = counter + 1;
    }
  }
  return images;
}

export function TestimonySection({ isAMovil }) {
  let counter = 0;

  let subCarouselImages = renderImages(
    TESTIMONY_SUB_CAROUSEL,
    "subCarouselItem",
    isAMovil
  );
  let CarouselImages = renderImages(
    TESTIMONY_CAROUSEL,
    "CarouselItem",
    isAMovil
  );

  return (
    <article className="TestimonyContainer">
      <div>
        <Carousel
          showThumbs={false}
          showArrows={false}
          showIndicators={true}
          showStatus={false}
          interval={5000}
          autoPlay={true}
          infiniteLoop={true}
          className="SecondaryTestimonyCarousel"
        >
          {CarouselImages.map((item) => item)}
        </Carousel>
      </div>
      <div>
        <Carousel
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          interval={5000}
          autoPlay={true}
          infiniteLoop={true}
          className="SecondaryTestimonyCarousel"
        >
          {subCarouselImages.map((item) => item)}
        </Carousel>
      </div>
    </article>
  );
}
