import { ArrowUp, ArrowUpRight } from "lucide-react";
import { contact } from "../data/content";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__noise" />
      <div className="footer__top">
        <span>Ready when you are.</span>
        <p>Visits available by appointment</p>
      </div>

      <div className="footer__headline">
        <h2>MAKE YOUR</h2>
        <div>
          <h2>MOVE<span>.</span></h2>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Book a visit on WhatsApp"
            data-magnetic
          >
            <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="footer__contact">
        <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>
      </div>

      <div className="footer__bottom">
        <div className="brand brand--footer">
          <span className="brand__disc">MVA</span>
          <span className="brand__name">STAYWITH<b>MVA</b></span>
        </div>
        <p>North Campus, Delhi / Rooms, PGs & co-living</p>
        <p>Copyright {new Date().getFullYear()} StayWithMVA</p>
        <a href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}

export default Footer;
