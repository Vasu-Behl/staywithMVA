import { ArrowUpRight } from "lucide-react";

function Intro() {
  return (
    <section className="intro section-pad" id="intro">
      <div className="section-label" data-reveal>
        <span>01</span>
        <span>The anti-boring stay</span>
      </div>

      <div className="intro__layout">
        <h2 data-reveal>
          NOT JUST FOUR WALLS.
          <br />
          A <em>WHOLE NEW</em> FREQUENCY.
        </h2>

        <div className="intro__aside" data-reveal>
          <p>
            StayWithMVA is built for the years that shape you. Private corners
            when you need focus. Shared spaces when you want connection. A
            neighbourhood that keeps the city within reach.
          </p>
          <a className="text-link" href="#stays">
            Explore the spaces <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className="intro__numbers">
        <div data-reveal>
          <strong>10<span>min</span></strong>
          <p>to North Campus</p>
        </div>
        <div data-reveal>
          <strong>24<span>/7</span></strong>
          <p>secure premises</p>
        </div>
        <div data-reveal>
          <strong>01</strong>
          <p>less thing to worry about</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
