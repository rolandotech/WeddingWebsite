import { wedding } from "../data/wedding";

export default function Entourage() {
  return (
    <section className="section section--white" id="entourage">
      <div className="wrap">
        <header className="section-header">
          <h2 className="section-title">Presenting our parents, sponsors and entourage</h2>
        </header>
        <div className="entourage-grid">
          {wedding.entourage.parents.map((group) => (
            <article className="entourage-card" key={group.title}>
              <p className="kicker">{group.title}</p>
              <p>{group.names}</p>
            </article>
          ))}
        </div>
        <p className="lede" style={{ marginTop: "1.6rem" }}>
          {wedding.entourage.sponsors}
        </p>
      </div>
    </section>
  );
}
