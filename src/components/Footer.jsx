import BotanicalMark from "./BotanicalMark";
import { wedding } from "../data/wedding";

export default function Footer() {
  return (
    <>
      <section className="closing" id="closing" aria-label="Closing">
        <img src={wedding.closing.image} alt={wedding.closing.alt} loading="lazy" />
        <div className="closing__veil" />
        <div className="closing__content">
          <p className="kicker" style={{ color: "var(--gold)" }}>
            Until we gather in Bacolod
          </p>
          <p className="closing__names">
            {wedding.groom.first}
            <span className="closing__and"> &amp; </span>
            {wedding.bride.first}
          </p>
          <BotanicalMark />
          <p>{wedding.closing.message}</p>
          <p className="hero__date" style={{ color: "var(--cream)" }}>
            {wedding.date.display}
          </p>
        </div>
      </section>
      <footer className="site-footer">
        <strong>
          {wedding.groom.first} &amp; {wedding.bride.first}
        </strong>
        <p>
          {wedding.date.short} · {wedding.location.city}
        </p>
      </footer>
    </>
  );
}
