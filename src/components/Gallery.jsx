import { useEffect, useState } from "react";
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
    <section className="section section--white gallery-section" id="gallery">
      <div className="wrap--wide">
        <header className="section-header">
          <h2 className="section-title">Pre-nup Photos</h2>
        </header>
        <div className="gallery-grid">
          {wedding.gallery.map((photo, index) => (
            <button
              className="gallery-item"
              type="button"
              key={photo.src}
              onClick={() => setActive(index)}
              aria-label={`Open photograph: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </button>
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
