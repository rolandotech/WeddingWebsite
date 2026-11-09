import { mapsSearch, wedding } from "../data/wedding";

export default function WeddingDetails() {
  return (
    <section className="section section--white venue-section" id="details">
      <div className="wrap--wide">
        <header className="section-header">
          <h2 className="section-title">The Venue</h2>
        </header>
        <div className="venue-grid">
          {wedding.details.map((item) => (
            <article className="venue-card" key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.id === "ceremony" ? "Ceremony" : "Reception"}</h3>
              <p>
                {item.place}
                <br />
                {item.venue}
                <br />
                {item.address}
              </p>
              <p>{item.time}</p>
              <a
                className="btn btn--light"
                href={item.mapsUrl || mapsSearch(item.mapsQuery)}
                target="_blank"
                rel="noreferrer"
              >
                View map
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
