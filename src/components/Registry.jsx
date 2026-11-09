import { wedding } from "../data/wedding";

export default function Registry() {
  return (
    <section className="section section--sage" id="registry">
      <div className="wrap">
        <header className="section-header">
          <h2 className="section-title">Gift Guide</h2>
          <p className="section-subtitle">{wedding.registry.intro}</p>
        </header>
      </div>
    </section>
  );
}
