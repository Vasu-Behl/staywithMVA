import { ArrowUpRight, Check } from "lucide-react";
import { contact, prices } from "../data/content";

function Pricing() {
  return (
    <section className="pricing section-pad" id="pricing">
      <div className="pricing__head">
        <div className="section-label section-label--light" data-reveal>
          <span>06</span>
          <span>Clear, simple choices</span>
        </div>
        <h2 data-reveal>FIND YOUR FIT.</h2>
        <p data-reveal>
          Starting prices shown below. Final availability and inclusions are
          confirmed during your visit.
        </p>
      </div>

      <div className="pricing__grid">
        {prices.map((plan) => (
          <article
            className={`price-card ${plan.featured ? "price-card--featured" : ""}`}
            key={plan.name}
            data-reveal
          >
            <div className="price-card__top">
              <span>{plan.type}</span>
              {plan.featured && <i>Best value</i>}
            </div>
            <h3>{plan.name}</h3>
            <div className="price-card__price">
              <sup>Rs.</sup>
              <strong>{plan.price}</strong>
              <span>{plan.suffix}</span>
            </div>
            <p>{plan.note}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}><Check size={16} /> {feature}</li>
              ))}
            </ul>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              Check availability <ArrowUpRight size={18} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
