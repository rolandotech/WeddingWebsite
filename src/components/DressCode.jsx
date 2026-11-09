import { wedding } from "../data/wedding";

export default function DressCode() {
  const { dressCode } = wedding;

  return (
    <section className="section section--sage-soft" id="dress">
      <div className="wrap">
        <header className="section-header">
          <h2 className="section-title">Dress Code</h2>
        </header>

        <div className="sponsor-block">
          <h3 className="subhead">Principal Sponsors</h3>
          <div className="sponsor-grid">
            {[dressCode.ninong, dressCode.ninang].map((person) => (
              <article className="look-card" key={person.title}>
                <img src={person.image} alt={person.alt} />
                <p className="kicker">{person.title}</p>
                <p>{person.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="guest-block">
          <h3 className="subhead">Guests</h3>
          <div className="palette palette--photos" aria-label="Guest colour palette">
            {dressCode.palette.map((tone) => (
              <figure className="swatch swatch--photo" key={tone.name}>
                <img src={tone.image} alt="" />
                <i style={{ background: tone.hex }} />
                <figcaption>{tone.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="dress-notes">
          {dressCode.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
