import { wedding } from "../data/wedding";

export default function SnapShare() {
  return (
    <section className="section section--sage" id="snap">
      <div className="wrap">
        <header className="section-header">
          <h2 className="section-title">Snap and Share</h2>
          <p className="section-subtitle">
            After our unplugged ceremony, help us capture and share our precious moments using our
            official hashtags
          </p>
          <p className="hashtag" style={{ color: "var(--peach)" }}>
            {wedding.hashtags.join("  ·  ")}
          </p>
        </header>
      </div>
    </section>
  );
}
