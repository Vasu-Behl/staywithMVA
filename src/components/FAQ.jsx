import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/content";

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section-pad">
      <div className="faq__head">
        <div className="section-label" data-reveal>
          <span>08</span>
          <span>Before you ask</span>
        </div>
        <h2 data-reveal>GOOD QUESTIONS.</h2>
      </div>

      <div className="faq__list" data-reveal>
        {faqs.map((item, index) => {
          const active = open === index;
          return (
            <article className={`faq-item ${active ? "faq-item--open" : ""}`} key={item.question}>
              <button
                type="button"
                aria-expanded={active}
                onClick={() => setOpen(active ? -1 : index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.question}</strong>
                {active ? <Minus /> : <Plus />}
              </button>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
