import Countdown from "./Countdown";
import { wedding } from "../data/wedding";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Invitation">
      <div className="hero__media">
        <img src={wedding.hero.image} alt={wedding.hero.alt} fetchPriority="high" />
        <div className="hero__veil" />
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">You are cordially invited to the wedding of</p>
        <h1 className="hero__names">
          {wedding.groom.first} <span className="hero__amp">&amp;</span> {wedding.bride.first}
        </h1>
        <div className="hero__lockup">
          <p className="hero__month">December</p>
          <p className="hero__dayline">
            <span>Friday</span>
            <strong>18</strong>
            <span>1:00 PM</span>
          </p>
          <p className="hero__year">2026</p>
        </div>
      </div>
      <Countdown />
    </section>
  );
}
