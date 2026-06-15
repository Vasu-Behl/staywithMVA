import { ArrowUpRight } from "lucide-react";
import { stays } from "../data/content";

function Stays() {
  return (
    <section className="stays-wrap" id="stays">
      <div className="stays-pin">
        <div className="stays-heading">
          <div className="section-label section-label--light">
            <span>02</span>
            <span>Choose your mode</span>
          </div>
          <p>Three ways to live. One less complicated decision.</p>
        </div>

        <div className="stays-track">
          {stays.map((stay) => (
            <article className="stay-card" key={stay.title}>
              <div className="stay-card__media" data-cursor="View">
                <img src={stay.image} alt={stay.title} />
                <span className="stay-card__tag">{stay.tag}</span>
                <span className="stay-card__index">{stay.index}</span>
              </div>

              <div className="stay-card__copy">
                <div>
                  <p>{stay.subtitle}</p>
                  <h3>{stay.title}</h3>
                </div>
                <div className="stay-card__detail">
                  <p>{stay.description}</p>
                  <a href="#pricing" aria-label={`See pricing for ${stay.title}`}>
                    {stay.price} <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stays;
