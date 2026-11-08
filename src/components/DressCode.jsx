import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { wedding } from "../data/wedding";

export default function DressCode() {
  const { dressCode } = wedding;

  return (
    <section className="section section--cream" id="dress">
      <div className="wrap">
        <SectionHeader
          kicker="What to wear"
          title="Dress Code"
          subtitle={dressCode.intro}
        />
        <Reveal>
          <div className="palette" aria-label="Suggested colours">
            {dressCode.palette.map((tone) => (
              <div className="swatch" key={tone.name}>
                <i style={{ background: tone.hex }} />
                <span>{tone.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="attire-grid">
          <Reveal>
            <article className="attire-card">
              <p className="kicker">Gentlemen</p>
              <h3>Barong or earth-toned tailoring</h3>
              <p>{dressCode.gentlemen}</p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="attire-card">
              <p className="kicker">Ladies</p>
              <h3>Garden gowns in quiet colour</h3>
              <p>{dressCode.ladies}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
