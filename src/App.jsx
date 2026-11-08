import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import WeddingDetails from "./components/WeddingDetails";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import DressCode from "./components/DressCode";
import Registry from "./components/Registry";
import GuestWishes from "./components/GuestWishes";
import Footer from "./components/Footer";
import EnvelopeOpening from "./components/EnvelopeOpening";

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const reveal = useCallback(() => setRevealed(true), []);

  useEffect(() => {
    document.body.classList.toggle("is-sealed", !revealed);
    return () => document.body.classList.remove("is-sealed");
  }, [revealed]);

  return (
    <>
      {!revealed ? <EnvelopeOpening onComplete={reveal} /> : null}
      <div className={`site-shell ${revealed ? "is-revealed" : ""}`} inert={!revealed}>
        <a className="skip-link" href="#story">
          Skip to content
        </a>
        <Navbar />
        <main>
          <Hero />
          <Story />
          <WeddingDetails />
          <Countdown />
          <Timeline />
          <Gallery />
          <Rsvp />
          <DressCode />
          <Registry />
          <GuestWishes />
        </main>
        <Footer />
      </div>
    </>
  );
}
