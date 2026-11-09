import { wedding } from "../data/wedding";

export default function Timeline() {
  return (
    <section className="section section--paper" id="timeline">
      <div className="wrap">
        <header className="section-header">
          <h2 className="section-title">Wedding Timeline</h2>
        </header>
        <ol className="program">
          {wedding.program.map((item) => (
            <li className="program-item" key={item.title}>
              <p className="program-item__time">{item.time}</p>
              <div className="program-item__body">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
