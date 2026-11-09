import { wedding } from "../data/wedding";

export default function Faq() {
  return (
    <section className="section section--paper" id="faq">
      <div className="wrap">
        <header className="section-header">
          <h2 className="section-title">Your Questions Answered</h2>
        </header>
        <div className="faq-list">
          {wedding.faq.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
