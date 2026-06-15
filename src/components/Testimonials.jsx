import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";

function Testimonials() {
  return (
    <section className="testimonials section-pad">
      <div className="section-label" data-reveal>
        <span>07</span>
        <span>Resident notes</span>
      </div>

      <div className="testimonials__lead" data-reveal>
        <h2>HEARD AROUND<br /><em>THE HOUSE.</em></h2>
        <div>
          <span className="rating__stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} fill="currentColor" />
            ))}
          </span>
          <strong>4.7 / 5</strong>
          <p>Based on resident feedback</p>
        </div>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((item, index) => (
          <article key={item.name} data-reveal>
            <Quote />
            <p>{item.quote}</p>
            <footer>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{item.name}</strong>
                <small>{item.detail}</small>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
