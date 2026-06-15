import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "../data/content";

const links = [
  ["Stays", "#stays"],
  ["Life at MVA", "#life"],
  ["Location", "#location"],
  ["Pricing", "#pricing"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <header
        className={`nav-shell ${scrolled ? "nav-shell--scrolled" : ""} ${open ? "nav-shell--menu" : ""}`}
      >
        <a className="brand" href="#top" aria-label="StayWithMVA home">
          <span className="brand__disc">MVA</span>
          <span className="brand__name">
            STAYWITH
            <b>MVA</b>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="button button--nav"
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          data-magnetic
        >
          Book a visit
          <ArrowUpRight size={17} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <nav
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href={contact.whatsapp} onClick={() => setOpen(false)}>
          Book a visit <ArrowUpRight size={24} />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
