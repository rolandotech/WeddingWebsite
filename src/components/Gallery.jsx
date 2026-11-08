import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { wedding } from "../data/wedding";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % wedding.gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + wedding.gallery.length) % wedding.gallery.length);
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="section section--cream" id="gallery">
      <div className="wrap wrap--wide">
        <SectionHeader
          kicker="Light & leaf"
          title="Photo Gallery"
          subtitle="A gathering of quiet frames — gardens, tables, and the kind of light we hope will find us on the day."
        />
        <div className="gallery-grid">
          {wedding.gallery.map((photo, index) => (
            <Reveal key={photo.src} delay={(index % 3) * 60}>
              <button
                className="gallery-item"
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Open photograph: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {active !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer">
          <div className="lightbox__toolbar">
            <button type="button" onClick={() => setActive(null)}>
              Close
            </button>
          </div>
          <img src={wedding.gallery[active].src} alt={wedding.gallery[active].alt} />
          <div className="lightbox__nav">
            <button
              type="button"
              onClick={() =>
                setActive((index) => (index - 1 + wedding.gallery.length) % wedding.gallery.length)
              }
            >
              Previous
            </button>
            <span>
              {active + 1} / {wedding.gallery.length}
            </span>
            <button
              type="button"
              onClick={() => setActive((index) => (index + 1) % wedding.gallery.length)}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
