import { useEffect, useRef, useState } from "react";
import { wedding } from "../data/wedding";
import { createEnvelopeScene } from "../three/envelopeScene";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function EnvelopeOpening({ onComplete }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [opening, setOpening] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete();
      return undefined;
    }

    const node = mountRef.current;
    if (!node) return undefined;

    const scene = createEnvelopeScene(
      node,
      {
        groom: wedding.groom.first,
        bride: wedding.bride.first,
        date: wedding.date.display,
        place: wedding.location.city,
      },
      {
        onOpening: () => setOpening(true),
        onOpened: () => setExiting(true),
      }
    );
    sceneRef.current = scene;

    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
  }, [onComplete]);

  useEffect(() => {
    if (!exiting) return undefined;
    const id = window.setTimeout(() => onComplete(), 900);
    return () => window.clearTimeout(id);
  }, [exiting, onComplete]);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    sceneRef.current?.open();
  };

  const handleSkip = () => {
    setExiting(true);
  };

  return (
    <div
      className={`envelope-overlay ${exiting ? "is-exiting" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="envelope-title"
    >
      <div className="envelope-overlay__copy">
        <p className="kicker">An invitation</p>
        <h1 id="envelope-title" className="envelope-overlay__title">
          {wedding.groom.first}
          <span> &amp; </span>
          {wedding.bride.first}
        </h1>
        <p className="envelope-overlay__date">{wedding.date.formal}</p>
      </div>
      <div className="envelope-stage" ref={mountRef} />
      <div className="envelope-overlay__actions">
        <button className="btn btn--light" type="button" onClick={handleOpen} disabled={opening || exiting}>
          {opening ? "Opening…" : "Open the invitation"}
        </button>
        <button className="envelope-skip" type="button" onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  );
}
