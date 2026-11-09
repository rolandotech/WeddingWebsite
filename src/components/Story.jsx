import { wedding } from "../data/wedding";

export default function Story() {
  const { story } = wedding;

  return (
    <section id="story" aria-label="Our love story">
      <div className="story-split">
        <img src={story.image} alt={story.alt} />
        <div className="story-split__copy">
          <h2 className="section-title">{story.title}</h2>
          <p className="story-split__names">{story.names}</p>
          {story.paragraphs.map((paragraph) => {
            const text = typeof paragraph === "string" ? paragraph : paragraph.text;
            const emphasis = typeof paragraph === "object" && paragraph.emphasis;

            return (
              <p key={text} className={emphasis ? "story-emphasis" : undefined}>
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
