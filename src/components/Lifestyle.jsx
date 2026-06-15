import { ArrowUpRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

function Lifestyle() {
  return (
    <section className="lifestyle section-pad" id="life">
      <div className="lifestyle__top">
        <div className="section-label section-label--light" data-reveal>
          <span>04</span>
          <span>Life between the lectures</span>
        </div>
        <h2 data-reveal>
          COME FOR THE ROOM.
          <br />
          STAY FOR THE <em>STORIES.</em>
        </h2>
      </div>

      <div className="gallery">
        <figure className="gallery__wide" data-parallax>
          <img src={`${base}images/images1.jpeg`} alt="StayWithMVA residents celebrating Holi" />
          <figcaption>Holi at MVA / Colour, community, chaos</figcaption>
        </figure>

        <figure className="gallery__portrait gallery__portrait--one" data-parallax>
          <img src={`${base}images/images4.jpeg`} alt="Celebration cakes shared with residents" />
          <figcaption>Small moments, properly celebrated</figcaption>
        </figure>

        <div className="gallery__statement" data-reveal>
          <span>Good rooms are designed.</span>
          <strong>Great stays are felt.</strong>
          <a href="#contact">
            Meet the community <ArrowUpRight size={18} />
          </a>
        </div>

        <figure className="gallery__portrait gallery__portrait--two" data-parallax>
          <img src={`${base}images/images5.jpeg`} alt="Residents celebrating together at StayWithMVA" />
          <figcaption>Life inside the house</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Lifestyle;
