import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { wedding } from "../data/wedding";

export default function Registry() {
  return (
    <section className="section section--ivory" id="registry">
      <div className="wrap">
        <SectionHeader
          kicker="With open hands"
          title="Gifts"
          subtitle={wedding.registry.intro}
        />
        <div className="registry-grid">
          {wedding.registry.notes.map((note, index) => (
            <Reveal key={note.title} delay={index * 80}>
              <article className="registry-card">
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
