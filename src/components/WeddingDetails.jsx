import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { mapsSearch, wedding } from "../data/wedding";

export default function WeddingDetails() {
  return (
    <section className="section section--cream" id="details">
      <div className="wrap">
        <SectionHeader
          kicker="When & where"
          title="Wedding Details"
          subtitle="Join us in Bacolod — vows at Lupit Church, then an evening at Garden Royale."
        />
        <div className="details-grid">
          {wedding.details.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className="detail-card">
                <p className="kicker">{item.kicker}</p>
                <h3>{item.place}</h3>
                <dl>
                  <div>
                    <dt>Hour</dt>
                    <dd>{item.time}</dd>
                  </div>
                  <div>
                    <dt>Venue</dt>
                    <dd>
                      {item.venue}
                      <br />
                      {item.address}
                    </dd>
                  </div>
                </dl>
                <p className="detail-card__note">{item.note}</p>
                <a
                  className="btn btn--ghost"
                  href={item.mapsUrl || mapsSearch(item.mapsQuery)}
                  target="_blank"
                  rel="noreferrer"
                >
                  View location
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
