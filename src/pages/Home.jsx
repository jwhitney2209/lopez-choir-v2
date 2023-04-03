import Directors from "../components/directors.component";
import Hero from "../components/hero.component";
import Carousel from "../components/carousel.component";
import Announcements from "../components/annoucement.component";

import VarsityMixed from "../assets/uilmixed.jpg";
import VarsityTreble from "../assets/uiltreble.jpg";
import NVTreble from "../assets/uilnvtreble.jpg";
import VarsityTenorBass from "../assets/uiltenorbass.jpg";

const slides = [
  {
    index: 0,
    image: VarsityMixed,
  },
  {
    index: 1,
    image: VarsityTreble,
  },
  {
    index: 2,
    image: NVTreble,
  },
  {
    index: 3,
    image: VarsityTenorBass,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-white py-12 px-4 sm:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <Announcements />
          <Carousel>
            {slides.map((s) => (
              <img
                key={s.index}
                src={s.image}
                className="aspect-[16/9] w-full rounded-2xl object-cover"
                alt="carousel slides"
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="bg-gray-900 mx-auto max-w-7xl">
        <Directors />
      </div>
    </>
  );
}
