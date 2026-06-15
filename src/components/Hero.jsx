import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import { contact } from "../data/content";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img
          src={`${import.meta.env.BASE_URL}images/bedroom.jpg`}
          alt="The decorated entrance at StayWithMVA"
        />
        <div className="hero-media__shade" />
      </div>

      <div className="hero-grid grid-lines">
        <div className="hero-kicker">
          <span>Rooms / PGs / Co-living</span>
          <span>North Campus, Delhi</span>
        </div>

        <h1 className="hero-title" aria-label="Stay vivid. Live easy.">
          <span className="hero-word">
            <span className="hero-word-inner">STAY</span>
          </span>
          <span className="hero-word hero-word--accent">
            <span className="hero-word-inner">VIVID.</span>
          </span>
          <span className="hero-word hero-word--right">
            <span className="hero-word-inner">LIVE EASY.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="rating">
            <span className="rating__stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} fill="currentColor" />
              ))}
            </span>
            <span>4.7 resident rating</span>
          </div>

          <p>
            A better base for college, work and everything that comes next.
            Thoughtful rooms. Real community. Zero generic energy.
          </p>

          <a
            className="button button--hero"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-magnetic
          >
            Find your room <ArrowUpRight size={18} />
          </a>

          <a className="scroll-cue" href="#intro" aria-label="Scroll to discover">
            <ArrowDown size={18} />
          </a>
        </div>
      </div>

      <div className="hero-orbit" aria-hidden="true">
        <span>STAY WITH MVA / DELHI / </span>
      </div>
    </section>
  );
}

export default Hero;
