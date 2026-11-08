import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { wedding } from "../data/wedding";

export default function Story() {
  return (
    <section className="section section--ivory" id="story">
      <div className="wrap">
        <SectionHeader kicker="A quiet unfolding" title="Our Story" />
        <Reveal>
          <p className="story-lead">{wedding.storyLead}</p>
        </Reveal>
        {wedding.chapters.map((chapter, index) => (
          <article className="chapter" key={chapter.numeral}>
            <Reveal className="chapter__image" delay={index * 40}>
              <img src={chapter.image} alt={chapter.alt} loading="lazy" />
            </Reveal>
            <Reveal className="chapter__copy" delay={80}>
              <p className="chapter__numeral">{chapter.numeral}</p>
              <h3 className="chapter__title">{chapter.title}</h3>
              <p className="chapter__date">{chapter.date}</p>
              <p>{chapter.body}</p>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
