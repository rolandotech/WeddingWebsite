import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Story from "./components/Story";
import Entourage from "./components/Entourage";
import CouplePhoto from "./components/CouplePhoto";
import DressCode from "./components/DressCode";
import Registry from "./components/Registry";
import SnapShare from "./components/SnapShare";
import WeddingDetails from "./components/WeddingDetails";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import { wedding } from "./data/wedding";

export default function App() {
  return (
    <div className="site-shell is-revealed">
      <a className="skip-link" href="#story">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Story />
        <Entourage />
        <CouplePhoto photo={wedding.couplePhotos[0]} id="picture-one" />
        <DressCode />
        <Registry />
        <SnapShare />
        <WeddingDetails />
        <CouplePhoto photo={wedding.couplePhotos[1]} id="picture-two" />
        <Faq />
        <Timeline />
        <Gallery />
        <Rsvp />
      </main>
      <Footer />
    </div>
  );
}
