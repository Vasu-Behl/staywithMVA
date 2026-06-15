import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stays from "./components/Stays";
import Amenities from "./components/Amenities";
import Lifestyle from "./components/Lifestyle";
import Location from "./components/Location";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setLoaded(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setLoaded(true), 1850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.1,
    });

    const update = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [loaded]);

  useLayoutEffect(() => {
    if (!loaded || !appRef.current) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return undefined;

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      heroTimeline
        .fromTo(
          ".nav-shell",
          { y: -32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            onComplete: () => gsap.set(".nav-shell", { clearProps: "transform" }),
          },
        )
        .fromTo(
          ".hero-kicker",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          ".hero-word-inner",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.15, stagger: 0.11 },
          "-=0.45",
        )
        .fromTo(
          ".hero-media",
          { clipPath: "inset(18% 12% 18% 12% round 2rem)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0rem)",
            duration: 1.45,
          },
          "-=1.05",
        )
        .fromTo(
          ".hero-bottom",
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.75",
        );

      gsap.to(".hero-media img", {
        scale: 1,
        duration: 2.3,
        ease: "power3.out",
      });

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        const image = element.querySelector("img");
        if (!image) return;

        gsap.fromTo(
          image,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 901px)", () => {
        const track = document.querySelector(".stays-track");
        const wrap = document.querySelector(".stays-wrap");
        const pin = document.querySelector(".stays-pin");

        if (!track || !wrap || !pin) return undefined;

        const getDistance = () => Math.max(0, track.scrollWidth - innerWidth);
        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${getDistance() * 1.12}`,
            pin,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.kill();
      });

      const magneticElements = gsap.utils.toArray("[data-magnetic]");
      magneticElements.forEach((element) => {
        const move = (event) => {
          const bounds = element.getBoundingClientRect();
          const x = event.clientX - bounds.left - bounds.width / 2;
          const y = event.clientY - bounds.top - bounds.height / 2;

          gsap.to(element, {
            x: x * 0.18,
            y: y * 0.18,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        const reset = () => {
          gsap.to(element, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, .4)" });
        };

        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", reset);
      });

      return () => mm.revert();
    }, appRef);

    return () => context.revert();
  }, [loaded]);

  return (
    <>
      <Loader hidden={loaded} />
      <Cursor />
      <div ref={appRef} className={`site-shell ${loaded ? "is-loaded" : ""}`}>
        <Navbar />
        <main>
          <Hero />
          <Intro />
          <Stays />
          <Amenities />
          <Lifestyle />
          <Location />
          <Pricing />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
