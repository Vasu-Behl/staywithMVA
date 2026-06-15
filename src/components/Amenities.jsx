import { amenities } from "../data/content";

function Amenities() {
  return (
    <section className="amenities section-pad">
      <div className="section-label" data-reveal>
        <span>03</span>
        <span>Everything, considered</span>
      </div>

      <div className="amenities__headline" data-reveal>
        <h2>THE BORING STUFF?</h2>
        <h2><em>HANDLED.</em></h2>
      </div>

      <div className="amenities__grid">
        {amenities.map((amenity, index) => {
          const AmenityIcon = amenity.icon;

          return (
            <article key={amenity.label} className="amenity-card" data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <AmenityIcon strokeWidth={1.5} />
              <h3>{amenity.label}</h3>
            </article>
          );
        })}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[1, 2].map((set) => (
            <div className="marquee__group" key={set}>
              <span>ROOM TO FOCUS</span><i />
              <span>SPACE TO CONNECT</span><i />
              <span>DELHI ON YOUR DOORSTEP</span><i />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
