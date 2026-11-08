import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { wedding } from "../data/wedding";

export default function Timeline() {
  return (
    <section className="section section--ivory" id="timeline">
      <div className="wrap">
        <SectionHeader
          kicker="Order of the day"
          title="Wedding Timeline"
          subtitle="A gentle pace — time enough to be present, to eat well, and to stay until the lanterns glow."
        />
        <ol className="program">
          {wedding.program.map((item, index) => (
            <Reveal as="li" className="program-item" key={item.title} delay={index * 50}>
              <p className="program-item__time">{item.time}</p>
              <div className="program-item__body">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
