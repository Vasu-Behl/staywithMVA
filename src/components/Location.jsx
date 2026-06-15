import { ArrowUpRight, MapPin } from "lucide-react";

function Location() {
  return (
    <section className="location section-pad" id="location">
      <div className="section-label" data-reveal>
        <span>05</span>
        <span>Right where life happens</span>
      </div>

      <div className="location__grid">
        <div className="location__copy">
          <p className="eyebrow" data-reveal>28.6781 N / 77.2026 E</p>
          <h2 data-reveal>
            NORTH CAMPUS.
            <br />
            <em>YOUR CAMPUS.</em>
          </h2>
          <p data-reveal>
            Colleges, metro links, Kamla Nagar, late-night chai and everyday
            essentials are all close enough to make Delhi feel beautifully
            manageable.
          </p>
          <a
            className="button button--dark"
            href="https://maps.google.com/?q=MVA+Rooms+and+PGs+Delhi"
            target="_blank"
            rel="noreferrer"
            data-magnetic
          >
            Open in Maps <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="location-map" data-reveal>
          <div className="map-orbit map-orbit--one" />
          <div className="map-orbit map-orbit--two" />
          <div className="map-cross map-cross--x" />
          <div className="map-cross map-cross--y" />
          <div className="map-pin">
            <MapPin />
            <span>MVA</span>
          </div>
          <span className="map-label map-label--one">Vishwavidyalaya</span>
          <span className="map-label map-label--two">Kamla Nagar</span>
          <span className="map-label map-label--three">North Campus</span>
          <div className="map-card">
            <span>From our door</span>
            <strong>07 min</strong>
            <p>to the metro by rickshaw</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
