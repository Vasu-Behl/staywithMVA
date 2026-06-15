import { useEffect, useRef } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let frame;

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const setActive = (event) => {
      const interactive = event.target.closest("a, button, [data-cursor]");
      ring.classList.toggle("cursor-ring--active", Boolean(interactive));
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", setActive);
    render();

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", setActive);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="cursor-dot" />
      <span ref={ringRef} className="cursor-ring" />
    </>
  );
}

export default Cursor;
