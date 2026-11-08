import BotanicalMark from "./BotanicalMark";
import { wedding } from "../data/wedding";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Invitation">
      <div className="hero__media">
        <img
          src={wedding.hero.image}
          alt={wedding.hero.alt}
          fetchPriority="high"
        />
        <div className="hero__veil" />
      </div>
      <div className="hero__content">
        <article className="hero__card">
          <p className="hero__eyebrow">The marriage of</p>
          <h1 className="hero__names">
            {wedding.groom.first}
            <span className="hero__and">and</span>
            {wedding.bride.first}
          </h1>
          <BotanicalMark />
          <p className="hero__date">{wedding.date.formal}</p>
          <p className="hero__intro">{wedding.intro}</p>
        </article>
      </div>
      <p className="hero__scroll">Scroll</p>
    </section>
  );
}
